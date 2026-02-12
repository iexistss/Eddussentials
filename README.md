# Edussentials - Education for All

![Edussentials](https://img.shields.io/badge/Education-For%20All-blue)
![Status](https://img.shields.io/badge/Status-Active-success)

## About

Edussentials is dedicated to providing essential educational materials and books to underprivileged schools and children. We believe that every child deserves access to quality education regardless of their background or circumstances.

## Our Mission

We are committed to:
- 📚 Providing essential books and learning materials to schools in need
- 🎓 Ensuring equal access to quality educational resources
- 💡 Empowering children to reach their full potential through education
- 🤝 Building partnerships with schools and communities for lasting impact

## Leadership Team

- **Shiro Njuguna** - Team Leader
- **Matthew Radido** - Team Leader
- **Angel Naholi** - Team Leader
- **Justin Gitonga** - Team Leader

## Our Work

We have visited **Chosen Children of Promise** and conducted comprehensive research to understand the educational needs of underprivileged communities. Our evidence-based approach ensures that our support makes a meaningful and lasting impact.

## Website

This repository contains the official Edussentials website showcasing our mission, team, and evidence of action.

### Features

- ✨ Modern, responsive design
- 📱 Mobile-friendly interface
- 🎥 Evidence of Action section with video documentation
- 📸 Image gallery showcasing our impact
- 🔗 Smooth navigation and animations
- ♿ Accessible and user-friendly

### How to View the Website

1. Clone this repository
2. Open `index.html` in your web browser
3. Or deploy to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)

### How to Add Your Research Videos

The Evidence of Action section now has **two video placeholders** for your research documentation:

1. Upload your videos to YouTube, Vimeo, or another video hosting platform
2. Get the embed code or URL for each video
3. Open `index.html`
4. Find the video placeholders in the Research Documentation section (around line 130-155)
5. Replace each placeholder div with your video embed code:

**For Video 1:**
```html
<iframe width="100%" height="300" src="YOUR_VIDEO_1_URL" frameborder="0" allowfullscreen></iframe>
```

**For Video 2:**
```html
<iframe width="100%" height="300" src="YOUR_VIDEO_2_URL" frameborder="0" allowfullscreen></iframe>
```

### How to Add Photos

The photo gallery now has **6 empty placeholder slots** ready for your photos:

To add photos of your visits and impact:

1. Create an `images` folder in the repository (if it doesn't exist)
2. Add your images to the `images` folder
3. Open `index.html`
4. Find the Impact section (around line 188-241)
5. Replace each empty photo placeholder with actual images:

**Example - Replace this:**
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

You can also click on any photo placeholder on the website to see these instructions!

**Important**: Ensure you have proper permissions and consent before using any photographs of children.

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla JS)
- Google Fonts (Poppins)

## Customization

The website is easy to customize:
- Colors can be changed in `styles.css` (see CSS variables at the top)
- Content can be edited directly in `index.html`
- Animations and interactions are in `script.js`

## Deployment

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages"
3. Select your branch (usually `main`)
4. Save and your site will be live at `https://yourusername.github.io/Edussentials`

### Other Hosting Options

- **Netlify**: Drag and drop the repository folder
- **Vercel**: Connect your GitHub repository
- **Traditional hosting**: Upload all files via FTP

## Contributing

We welcome contributions to improve our website and mission. Please feel free to:
- Report issues
- Suggest improvements
- Submit pull requests

## License

This project is created for educational and charitable purposes.

## Contact

For more information about Edussentials and how to support our mission:
- Email: info@edussentials.org
- Community: IGCSE

---

**Education for All, Hope for the Future** 🌟
