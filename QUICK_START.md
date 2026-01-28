# Quick Start Guide for Edussentials Website

## What Has Been Created

Your professional Edussentials website is now ready! Here's what we built:

### Files Created
- `index.html` - Main website file with all content
- `styles.css` - Professional styling and animations
- `script.js` - Interactive features and smooth scrolling
- `README.md` - Complete documentation
- This `QUICK_START.md` - Quick reference guide

### Website Sections

1. **Hero Section** - Eye-catching introduction
2. **About Section** - Your group's story and leadership team
3. **Mission Section** - Your four key goals
4. **Evidence of Action** - Chosen Children of Promise visit and research video
5. **Our Impact** - Photo gallery for your work
6. **Contact Section** - Ways to support and get involved

## How to View Your Website

### Option 1: View Locally
1. Open `index.html` in any web browser
2. That's it! The website works without any server

### Option 2: Deploy to GitHub Pages (Recommended)
1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select your branch (main)
4. Click "Save"
5. Your site will be live at: `https://iexistss.github.io/Eddussentials/`

### Option 3: Deploy to Netlify
1. Go to https://netlify.com
2. Drag and drop your repository folder
3. Your site is live in seconds!

## How to Customize

### Add Your Research Videos (2 Videos Available!)
The Evidence of Action section now has **two video placeholders**:

1. Upload your videos to YouTube or Vimeo
2. Get the embed code for each (click Share → Embed)
3. Open `index.html`
4. Find lines ~130-155 (search for "Research Video 1" and "Research Video 2")
5. Replace each placeholder with your video embed code:

**For Video 1:**
```html
<iframe width="100%" height="300" src="YOUR_VIDEO_1_URL" frameborder="0" allowfullscreen></iframe>
```

**For Video 2:**
```html
<iframe width="100%" height="300" src="YOUR_VIDEO_2_URL" frameborder="0" allowfullscreen></iframe>
```

### Add Your Photos (6 Photo Slots Available!)
The photo gallery now has **6 empty slots** ready for your images:

1. Create a folder called `images` in your repository
2. Add your photos (with proper permissions!)
3. Open `index.html`
4. Find lines ~188-241 (search for "empty-photo-placeholder")
5. Replace each placeholder div with an image tag:

**Replace this:**
```html
<div class="empty-photo-placeholder">
    <div class="photo-placeholder-content">
        <span class="photo-icon">📷</span>
        <p class="photo-text">Add Photo 1</p>
    </div>
</div>
```

**With this:**
```html
<img src="images/your-photo.jpg" alt="Description" style="width: 100%; height: 250px; object-fit: cover;">
```

💡 **Tip:** Click on any photo placeholder on the website to see instructions!

### Change Colors
Open `styles.css` and edit the colors at the top:
```css
:root {
    --primary-color: #2c3e50;      /* Dark blue-gray */
    --secondary-color: #3498db;    /* Bright blue */
    --accent-color: #e74c3c;       /* Red accent */
}
```

### Update Contact Information
In `index.html`, find the Contact section and update:
- Email address
- Location
- Any other details

## Features You'll Love

✅ **Fully Responsive** - Works on phones, tablets, and desktops
✅ **Smooth Animations** - Professional fade-ins and hover effects
✅ **Mobile Menu** - Hamburger menu for small screens
✅ **Accessible** - Screen reader friendly with ARIA labels
✅ **Fast Loading** - No heavy frameworks, just clean code
✅ **Easy to Edit** - Clear HTML structure, no complex build process

## Need Help?

Check the main `README.md` for:
- Detailed deployment instructions
- More customization options
- Technical details

## Important Notes

📸 **Before adding photos of children:**
- Get proper permissions from parents/guardians
- Ensure you have consent for online publication
- Follow your school's photography policies

🎥 **Video Hosting:**
- YouTube and Vimeo are free and reliable
- Make sure your video is set to "Public" or "Unlisted"
- Use the embed code, not just the URL

## Your Website is Ready! 🎉

Open `index.html` in your browser to see your professional Edussentials website in action!

---
*Created for the IGCSE Edussentials Group*
*Education for All, Hope for the Future*
