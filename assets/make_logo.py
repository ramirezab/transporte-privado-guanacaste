"""Genera el logo (marca) en PNG: cuadro redondeado con degradado turquesa->oceano
y la palmera, con esquinas transparentes. Alta resolucion."""
from PIL import Image, ImageDraw, ImageFont

S = 1024
TEAL = (0, 163, 154)
OCEAN = (0, 109, 119)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

# Fondo con degradado diagonal (aprox. 140deg)
grad = Image.new("RGB", (S, S))
gd = grad.load()
for y in range(S):
    for x in range(S):
        t = (x * 0.35 + y * 0.65) / S
        t = max(0.0, min(1.0, t))
        gd[x, y] = lerp(TEAL, OCEAN, t)

# Mascara redondeada
mask = Image.new("L", (S, S), 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * 0.20), fill=255)

img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
img.paste(grad, (0, 0), mask)

# Palmera (emoji a color de Segoe UI Emoji)
draw = ImageDraw.Draw(img)
emoji_ok = False
for path in (r"C:\Windows\Fonts\seguiemj.ttf",):
    try:
        font = ImageFont.truetype(path, 560)
        draw.text((S // 2, S // 2 + 40), "\U0001F334", font=font, anchor="mm", embedded_color=True)
        emoji_ok = True
        break
    except Exception as e:
        print("emoji fallo:", e)

if not emoji_ok:
    # Respaldo: palmera dibujada con figuras (por si no hay fuente de emoji)
    cx = S // 2
    sand = (255, 221, 130)
    trunk = (120, 84, 52)
    leaf = (46, 140, 90)
    # tronco curvo
    for i in range(60):
        t = i / 60
        x = int(cx - 30 + 90 * t)
        y = int(S * 0.78 - (S * 0.42) * t)
        r = int(26 * (1 - t) + 10)
        draw.ellipse([x - r, y - r, x + r, y + r], fill=trunk)
    top = (cx + 60, int(S * 0.36))
    for ang, lx, ly in [(-1, -260, -40), (-1, -170, -150), (0, 0, -210),
                        (1, 170, -150), (1, 260, -40), (1, 120, 60), (-1, -120, 60)]:
        draw.polygon([top, (top[0] + lx, top[1] + ly),
                      (top[0] + int(lx * 0.5), top[1] + ly + 50)], fill=leaf)
    draw.ellipse([top[0] - 26, top[1] - 26, top[0] + 26, top[1] + 26], fill=(34, 110, 70))

img.save(r"C:\Users\bryan\Desktop\Web Transporte Guanacaste\assets\logo.png")
# Version mas pequena util (256)
img.resize((256, 256), Image.LANCZOS).save(r"C:\Users\bryan\Desktop\Web Transporte Guanacaste\assets\logo-256.png")
print("listo, emoji_ok =", emoji_ok)
