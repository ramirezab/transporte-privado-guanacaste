"""Ilustración representativa de Catarata La Leona (cañón con catarata turquesa),
estilo plano con figuras geométricas. Placeholder hasta tener fotos reales."""
from PIL import Image, ImageDraw, ImageFilter

SS = 2
W, H = 1500 * SS, 1000 * SS

SKY_T = (206, 232, 233)
SKY_B = (233, 245, 240)
ROCK_D = (120, 96, 78)
ROCK_M = (150, 122, 100)
ROCK_L = (176, 150, 126)
JUNGLE_D = (38, 92, 60)
JUNGLE_M = (54, 120, 78)
JUNGLE_L = (96, 165, 96)
WATER_T = (120, 214, 214)
WATER_M = (64, 190, 196)
WATER_D = (28, 150, 165)
FOAM = (236, 252, 250)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


img = Image.new("RGB", (W, H), SKY_B)
d = ImageDraw.Draw(img)

# cielo
for y in range(int(H * 0.5)):
    t = y / (H * 0.5)
    d.line([(0, y), (W, y)], fill=lerp(SKY_T, SKY_B, t))

cx = W // 2

# paredes de roca del cañón (izquierda y derecha) en capas
d.polygon([(0, 0), (W * 0.42, 0), (W * 0.46, H), (0, H)], fill=ROCK_M)
d.polygon([(W, 0), (W * 0.58, 0), (W * 0.54, H), (W, H)], fill=ROCK_M)
# sombras internas del cañón
d.polygon([(W * 0.36, 0), (W * 0.42, 0), (W * 0.46, H), (W * 0.40, H)], fill=ROCK_D)
d.polygon([(W * 0.64, 0), (W * 0.58, 0), (W * 0.54, H), (W * 0.60, H)], fill=ROCK_D)
# luces de roca
d.polygon([(0, 0), (W * 0.16, 0), (W * 0.20, H), (0, H)], fill=ROCK_L)
d.polygon([(W, 0), (W * 0.86, 0), (W * 0.82, H), (W, H)], fill=ROCK_L)

# vegetación arriba del cañón
def jungle(x0, x1, base, col):
    pts = [(x0, base)]
    n = 16
    import math
    for i in range(n + 1):
        x = x0 + (x1 - x0) * i / n
        y = base - (40 * SS) - (38 * SS) * (0.5 + 0.5 * math.sin(i * 1.7))
        pts.append((x, y))
    pts.append((x1, base))
    d.polygon(pts, fill=col)

jungle(0, W * 0.5, int(H * 0.30), JUNGLE_M)
jungle(W * 0.5, W, int(H * 0.32), JUNGLE_D)
jungle(0, W * 0.34, int(H * 0.24), JUNGLE_L)
jungle(W * 0.7, W, int(H * 0.26), JUNGLE_L)

# catarata (caída de agua)
fall_w = 70 * SS
d.rectangle([cx - fall_w, int(H * 0.20), cx + fall_w, int(H * 0.74)], fill=FOAM)
d.rectangle([cx - fall_w, int(H * 0.20), cx - fall_w + 22 * SS, int(H * 0.74)], fill=WATER_T)
d.rectangle([cx + fall_w - 22 * SS, int(H * 0.20), cx + fall_w, int(H * 0.74)], fill=WATER_T)
# roca tras la cima de la catarata
d.polygon([(cx - 130 * SS, int(H * 0.20)), (cx + 130 * SS, int(H * 0.20)),
           (cx + 90 * SS, int(H * 0.10)), (cx - 90 * SS, int(H * 0.10))], fill=ROCK_D)

# poza turquesa (elipses concéntricas)
pool = [int(W * 0.18), int(H * 0.66), int(W * 0.82), int(H * 0.99)]
d.ellipse(pool, fill=WATER_D)
d.ellipse([pool[0] + 40 * SS, pool[1] + 26 * SS, pool[2] - 40 * SS, pool[3] - 14 * SS], fill=WATER_M)
d.ellipse([pool[0] + 110 * SS, pool[1] + 50 * SS, pool[2] - 110 * SS, pool[3] - 28 * SS], fill=WATER_T)
# espuma donde cae el agua
d.ellipse([cx - 130 * SS, int(H * 0.70), cx + 130 * SS, int(H * 0.80)], fill=FOAM)

# rocas en la poza
for rx, ry, rr in [(0.30, 0.86, 60), (0.70, 0.88, 70), (0.5, 0.93, 55)]:
    x, y, r = int(W * rx), int(H * ry), int(rr * SS)
    d.ellipse([x - r, y - r * 0.7, x + r, y + r * 0.7], fill=ROCK_M)

img = img.filter(ImageFilter.GaussianBlur(SS * 0.4))
img = img.resize((W // SS, H // SS), Image.LANCZOS)
img.save(r"C:\Users\bryan\Desktop\Web Transporte Guanacaste\assets\la-leona.jpg", quality=88)
print("listo la-leona.jpg", img.size)
