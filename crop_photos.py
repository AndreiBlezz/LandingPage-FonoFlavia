from PIL import Image
import os

img1_path = r"C:\Users\Andrei\.gemini\antigravity\brain\abef8fd5-dbec-4eac-af3b-0aabac30a79c\.user_uploaded\media_1790278120906.png"
img2_path = r"C:\Users\Andrei\.gemini\antigravity\brain\abef8fd5-dbec-4eac-af3b-0aabac30a79c\.user_uploaded\media_1790276720014.png"

out_dir = r"C:\Users\Andrei\.gemini\antigravity\scratch\LandingPage-FonoFlavia\src\assets\clinic"
os.makedirs(out_dir, exist_ok=True)

img1 = Image.open(img1_path)
img2 = Image.open(img2_path)

# 1. Facade Main (from img2, removing header bar if present)
# img2 size: 680x385. Crop slight header border at y=10..385
facade = img2.crop((0, 10, 680, 385))
facade.save(os.path.join(out_dir, "clinic-1-fachada.png"))

# 2. Reception desk (from img1: x=162..294, y=235..545)
reception = img1.crop((162, 235, 294, 545))
reception.save(os.path.join(out_dir, "clinic-2-recepcao.png"))

# 3. Hallway with green wall (from img1: x=20..155, y=426..558)
hallway = img1.crop((20, 426, 155, 558))
hallway.save(os.path.join(out_dir, "clinic-3-corredor.png"))

# 4. Facade Sign GMN (from img1: x=332..932, y=346..558)
facade_gmn = img1.crop((332, 346, 932, 558))
facade_gmn.save(os.path.join(out_dir, "clinic-4-fachada-gmn.png"))

print("Cropped 4 clean clinic photos!")
