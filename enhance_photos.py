from PIL import Image, ImageEnhance
import os

images_map = {
    r"C:\Users\Andrei\.gemini\antigravity\brain\abef8fd5-dbec-4eac-af3b-0aabac30a79c\.user_uploaded\media_1790280063461.png": "super-herois.png",
    r"C:\Users\Andrei\.gemini\antigravity\brain\abef8fd5-dbec-4eac-af3b-0aabac30a79c\.user_uploaded\media_1790280081503.png": "espera.png",
    r"C:\Users\Andrei\.gemini\antigravity\brain\abef8fd5-dbec-4eac-af3b-0aabac30a79c\.user_uploaded\media_1790280087503.png": "recepcao.png",
    r"C:\Users\Andrei\.gemini\antigravity\brain\abef8fd5-dbec-4eac-af3b-0aabac30a79c\.user_uploaded\media_1790280092119.png": "brinquedoteca.png",
}

out_dir = r"C:\Users\Andrei\.gemini\antigravity\scratch\LandingPage-FonoFlavia\src\assets\clinic"
os.makedirs(out_dir, exist_ok=True)

for src_path, filename in images_map.items():
    img = Image.open(src_path).convert("RGB")
    
    # Subtly enhance brightness & contrast (no exaggeration)
    enhancer_bright = ImageEnhance.Brightness(img)
    img_bright = enhancer_bright.enhance(1.06)
    
    enhancer_contrast = ImageEnhance.Contrast(img_bright)
    img_final = enhancer_contrast.enhance(1.08)
    
    save_path = os.path.join(out_dir, filename)
    img_final.save(save_path, quality=95)
    print(f"Saved enhanced photo: {filename}")

print("All 4 clinic photos successfully processed & saved!")
