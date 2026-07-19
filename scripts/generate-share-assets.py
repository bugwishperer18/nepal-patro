from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / "build"
ICON = BUILD / "icon.png"
PREVIEW = BUILD / "social-preview.png"
FAVICON = ROOT / "favicon.ico"


def font(candidates, size):
    for candidate in candidates:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default(size=size)


latin_bold = font(
    [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
    ],
    74,
)
latin_regular = font(
    [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
    ],
    36,
)
latin_small = font(
    [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
    ],
    28,
)
devanagari = font(
    [
        "/System/Library/Fonts/Supplemental/Devanagari Sangam MN.ttc",
        "/System/Library/Fonts/Supplemental/DevanagariMT.ttc",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
    ],
    44,
)


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return mask


def paste_rounded(base, image, xy, radius):
    rounded = image.copy()
    rounded.putalpha(Image.composite(rounded.getchannel("A"), rounded_mask(image.size, radius), rounded_mask(image.size, radius)))
    base.alpha_composite(rounded, xy)


def make_social_preview():
    width, height = 1200, 630
    image = Image.new("RGBA", (width, height), "#f7f5f1")
    draw = ImageDraw.Draw(image)

    draw.rounded_rectangle((48, 48, width - 48, height - 48), radius=48, fill="#ffffff", outline="#e4e1da", width=2)
    draw.rounded_rectangle((68, 68, width - 68, 220), radius=36, fill="#fff7f5")
    draw.rectangle((68, 184, width - 68, 220), fill="#fff7f5")
    draw.rounded_rectangle((68, 420, width - 68, height - 68), radius=36, fill="#f0f6ff")

    icon = Image.open(ICON).convert("RGBA").resize((178, 178), Image.LANCZOS)
    paste_rounded(image, icon, (92, 96), 42)

    draw.text((304, 108), "Nepal Patro", fill="#1d1d1f", font=latin_bold)
    draw.text((308, 190), "नेपाली पात्रो", fill="#c43030", font=devanagari)

    draw.text((92, 306), "Calendar • Panchang • Rates • Tools", fill="#315f9f", font=latin_regular)
    draw.text((92, 366), "A modern no-login Nepali calendar and daily utility toolkit.", fill="#5f6368", font=latin_small)

    chips = [("BS/AD", "#c43030"), ("Forex", "#315f9f"), ("Gold", "#9f742d"), ("Kalimati", "#2f7d4a")]
    x = 92
    for label, color in chips:
        bbox = draw.textbbox((0, 0), label, font=latin_small)
        chip_width = bbox[2] - bbox[0] + 36
        draw.rounded_rectangle((x, 468, x + chip_width, 516), radius=24, fill=color)
        draw.text((x + 18, 476), label, fill="#ffffff", font=latin_small)
        x += chip_width + 14

    draw.text((92, 548), "nepal-patro.vercel.app", fill="#1d1d1f", font=latin_small)
    image.convert("RGB").save(PREVIEW, "PNG", optimize=True)


def make_favicon():
    icon = Image.open(ICON).convert("RGBA")
    icon.save(FAVICON, sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])


if __name__ == "__main__":
    make_social_preview()
    make_favicon()
    print(f"Generated {PREVIEW.relative_to(ROOT)} and {FAVICON.relative_to(ROOT)}")
