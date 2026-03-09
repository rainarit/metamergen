import os
from PIL import Image

def crop_center_square(img: Image.Image) -> Image.Image:
    w, h = img.size
    min_dim = min(w, h)
    left = (w - min_dim) // 2
    top = (h - min_dim) // 2
    right = left + min_dim
    bottom = top + min_dim
    return img.crop((left, top, right, bottom))

def crop_and_resize_all_fix_images(base_dir, out_size=1920):
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.startswith('fix_') and file.endswith('.png'):
                path = os.path.join(root, file)
                try:
                    img = Image.open(path)
                    # Crop to center square
                    cropped = crop_center_square(img)
                    # Resize to out_size x out_size
                    resized = cropped.resize((out_size, out_size), Image.LANCZOS)
                    resized.save(path)
                    print(f'Cropped and resized {path} to {resized.size}')
                except Exception as e:
                    print(f'Error processing {path}: {e}')

if __name__ == '__main__':
    crop_and_resize_all_fix_images('clarity', out_size=1920)
