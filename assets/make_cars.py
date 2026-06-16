"""Genera ilustraciones representativas de vehículos con figuras geométricas (PIL).
Sin marcas ni modelos: un mini SUV y dos sedanes, estilo plano y limpio."""
from PIL import Image, ImageDraw

SS = 2                      # supersampling
W, H = 880 * SS, 660 * SS   # lienzo 4:3

# ---- Paleta (acorde al sitio) ----
SKY_TOP   = (205, 236, 235)
SKY_BOT   = (254, 246, 241)
SUN       = (255, 209, 122)
ROAD      = (224, 232, 231)
ROAD_LINE = (255, 255, 255)
TIRE      = (34, 40, 44)
RIM       = (214, 221, 224)
HUB       = (120, 132, 138)
WINDOW    = (151, 197, 190)
WIN_SHADE = (120, 170, 165)
SHADOW    = (5, 59, 64)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def gradient_bg(draw):
    for y in range(H):
        t = y / H
        draw.line([(0, y), (W, y)], fill=lerp(SKY_TOP, SKY_BOT, min(1, t * 1.15)))
    # sol suave arriba a la derecha
    draw.ellipse([W - 180*SS, -60*SS, W - 50*SS, 70*SS], fill=SUN)
    # franja de carretera
    road_y = 470 * SS
    draw.rectangle([0, road_y, W, H], fill=ROAD)
    # línea discontinua
    seg = 46 * SS
    y = road_y + 70 * SS
    x = 20 * SS
    while x < W:
        draw.rounded_rectangle([x, y - 4*SS, x + seg, y + 4*SS], radius=4*SS, fill=ROAD_LINE)
        x += seg * 2


def wheel(draw, cx, cy, r):
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=TIRE)
    ri = int(r * 0.58)
    draw.ellipse([cx - ri, cy - ri, cx + ri, cy + ri], fill=RIM)
    rh = int(r * 0.2)
    draw.ellipse([cx - rh, cy - rh, cx + rh, cy + rh], fill=HUB)
    # rayos simples
    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        draw.line([cx, cy, cx + dx * ri, cy + dy * ri], fill=HUB, width=max(2, int(r*0.06)))


def draw_car(kind, body, lower=None, accent=None):
    img = Image.new("RGB", (W, H), SKY_BOT)
    d = ImageDraw.Draw(img)
    gradient_bg(d)

    cx = W // 2
    ground = 470 * SS            # nivel del suelo (contacto de ruedas)

    if kind == "suv":
        wr = 70 * SS             # ruedas más grandes (mayor altura libre)
        wb = 286 * SS            # batalla
        body_top = 264 * SS
        body_bot = ground - 2 * SS
        x0, x1 = cx - 286*SS, cx + 286*SS
        roof_top = 190 * SS
        roof_x0, roof_x1 = cx - 156*SS, cx + 142*SS
        roof_round = 30 * SS
        clad = True
    else:  # sedan
        wr = 60 * SS
        wb = 296 * SS
        body_top = 286 * SS
        body_bot = ground + 4 * SS
        x0, x1 = cx - 306*SS, cx + 306*SS
        roof_top = 210 * SS
        roof_x0, roof_x1 = cx - 142*SS, cx + 118*SS
        roof_round = 64 * SS
        clad = False

    wy = ground
    fx = cx - wb // 2
    rx = cx + wb // 2

    # sombra bajo el auto
    d.ellipse([x0 - 10*SS, body_bot + 14*SS, x1 + 10*SS, body_bot + 46*SS], fill=lerp(ROAD, SHADOW, 0.18))

    # arcos de rueda (huecos) primero como parte inferior del cuerpo
    # cuerpo principal
    d.rounded_rectangle([x0, body_top, x1, body_bot], radius=40*SS, fill=body)

    # capó / maletero perfilado (cuña frontal y trasera para los sedanes)
    if kind == "sedan":
        d.polygon([(x0, body_top + 30*SS), (x0 + 70*SS, body_top - 6*SS),
                   (x0 + 150*SS, body_top), (x0, body_top + 70*SS)], fill=body)
        d.polygon([(x1, body_top + 30*SS), (x1 - 70*SS, body_top - 6*SS),
                   (x1 - 150*SS, body_top), (x1, body_top + 70*SS)], fill=body)

    # techo / cabina
    d.rounded_rectangle([roof_x0, roof_top, roof_x1, body_top + 40*SS],
                        radius=roof_round, fill=body)
    if kind == "suv":
        # rieles de techo
        d.rounded_rectangle([roof_x0 + 6*SS, roof_top - 12*SS, roof_x1 - 6*SS, roof_top - 2*SS],
                            radius=6*SS, fill=lerp(body, TIRE, 0.5))

    # ventanas (greenhouse)
    win_inset = 22 * SS
    wt = roof_top + win_inset
    wb_ = body_top + 6*SS
    d.rounded_rectangle([roof_x0 + win_inset, wt, roof_x1 - win_inset, wb_],
                        radius=18*SS, fill=WINDOW)
    # pilar central que divide dos ventanas
    pcx = (roof_x0 + roof_x1) // 2 + 6*SS
    d.rectangle([pcx - 7*SS, wt, pcx + 7*SS, wb_], fill=body)
    # sombra inferior de las ventanas
    d.rectangle([roof_x0 + win_inset, wb_ - 12*SS, roof_x1 - win_inset, wb_], fill=WIN_SHADE)

    # moldura inferior / cladding (SUV)
    if clad:
        d.rounded_rectangle([x0, body_bot - 42*SS, x1, body_bot], radius=30*SS, fill=lower)
        # protector de arcos de rueda
        for wxc in (fx, rx):
            d.ellipse([wxc - wr - 12*SS, wy - wr - 14*SS, wxc + wr + 12*SS, wy + wr + 6*SS], fill=lower)

    # línea de cintura / puerta
    d.line([x0 + 40*SS, body_top + 96*SS, x1 - 40*SS, body_top + 96*SS],
           fill=lerp(body, TIRE, 0.22), width=3*SS)
    d.line([cx + 6*SS, body_top + 44*SS, cx + 6*SS, body_bot - (46*SS if clad else 10*SS)],
           fill=lerp(body, TIRE, 0.18), width=3*SS)
    # manija
    d.rounded_rectangle([cx + 40*SS, body_top + 80*SS, cx + 78*SS, body_top + 90*SS],
                        radius=5*SS, fill=lerp(body, TIRE, 0.3))

    # faro y stop
    if accent is None:
        accent = lerp(body, (0, 163, 154), 0.0)
    d.rounded_rectangle([x1 - 30*SS, body_top + 52*SS, x1 - 8*SS, body_top + 78*SS],
                        radius=6*SS, fill=(255, 226, 170))   # faro delantero (derecha)
    d.rounded_rectangle([x0 + 8*SS, body_top + 52*SS, x0 + 30*SS, body_top + 78*SS],
                        radius=6*SS, fill=(229, 80, 70))      # stop trasero (izquierda)

    # ruedas
    wheel(d, fx, wy, wr)
    wheel(d, rx, wy, wr)

    return img.resize((W // SS, H // SS), Image.LANCZOS)


jobs = [
    ("car-misuv.jpg",  "suv",   (244, 247, 248), (58, 70, 75)),   # mini SUV, blanco perla + cladding gris
    ("car-sedan1.jpg", "sedan", (240, 244, 246), None),           # sedán blanco
    ("car-sedan2.jpg", "sedan", (150, 170, 178), None),           # sedán gris plata
]
for name, kind, body, lower in jobs:
    im = draw_car(kind, body, lower)
    im.save(name, quality=90)
    print("guardado:", name, im.size)
