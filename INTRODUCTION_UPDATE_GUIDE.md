# Introduction Section - Update Guide 🎯

## Overview of New Features

Your Introduction section has been redesigned with these awesome features:

✅ **Left-Right Layout**: Avatar and name on the left, content on the right  
✅ **Auto-Rotating Tabs**: Content changes every 10 seconds automatically  
✅ **Manual Tab Control**: Users can click tabs to view specific content  
✅ **Resume Download**: Language-aware button that shows the correct resume  
✅ **Certificate Showcase**: Display your certificates in the Education tab  
✅ **Progress Bar**: Visual indicator showing time until next auto-rotation  

---

## 🎨 How It Works

### Auto-Rotation Feature
- Tabs automatically rotate every **10 seconds**
- Order: About Me → Experience → Education & Certificates → (repeat)
- Users can click any tab button to **manually switch**
- When clicked, the timer resets and continues from that tab
- A progress bar at the bottom shows the countdown

### Resume Button
- The button text changes based on the selected language:
  - English: "View My Resume"
  - Vietnamese: "Xem Hồ Sơ"
- Clicking opens the appropriate resume PDF in a new tab:
  - English version: `resume-en.pdf`
  - Vietnamese version: `resume-vi.pdf`

---

## 📝 Customization Instructions

### 1. Replace Resume Files

**Location**: `public/` folder

**Step-by-step:**

1. Prepare your resume PDFs (one in English, one in Vietnamese)
2. Name them:
   - `resume-en.pdf` (English version)
   - `resume-vi.pdf` (Vietnamese version)
3. Delete the existing placeholder files in `public/`
4. Copy your resume PDFs to `public/`

**Important Notes:**
- Keep the exact file names: `resume-en.pdf` and `resume-vi.pdf`
- File size: Recommended under 5MB for fast loading
- Format: PDF only

**Alternative**: If you only have one language, duplicate it with both names.

---

### 2. Add Your Avatar Photo

**Current Status**: Shows a user icon placeholder

**To Add Your Photo:**

**Option A - Using an Image File:**

1. Add your photo to `public/` folder (e.g., `public/avatar.jpg`)

2. Edit `src/components/Introduction.js` (around line 69-73):

```javascript
// REPLACE THIS:
<div className="avatar-circle">
  <FaUser className="avatar-icon" />
</div>

// WITH THIS:
<div className="avatar-circle">
  <img 
    src={`${process.env.PUBLIC_URL}/avatar.jpg`}
    alt="PhucDat Tran" 
  />
</div>
```

**Option B - Using Assets Folder:**

1. Create folder: `src/assets/`
2. Add your photo: `src/assets/avatar.jpg`
3. At the top of `Introduction.js`, add:
   ```javascript
   import avatarImage from '../assets/avatar.jpg';
   ```
4. Replace the avatar section with:
   ```javascript
   <div className="avatar-circle">
     <img src={avatarImage} alt="PhucDat Tran" />
   </div>
   ```

**Recommended Photo Specs:**
- Square ratio (1:1)
- Minimum 400x400px
- Maximum 1000x1000px
- Format: JPG or PNG
- Professional headshot with good lighting

---

### 3. Customize Certificate Section

**Current Status**: Shows 3 placeholder certificates

**Location**: `src/components/Introduction.js` (lines 27-39)

**To Add Your Certificates:**

**Step 1 - Add Certificate Images:**

1. Create folder: `src/assets/certificates/`
2. Add your certificate images (JPG or PNG format)
3. Name them clearly: `cert-aws.jpg`, `cert-react.jpg`, etc.

**Step 2 - Update the Code:**

In `src/components/Introduction.js`, import your images at the top:

```javascript
import cert1 from '../assets/certificates/cert-aws.jpg';
import cert2 from '../assets/certificates/cert-react.jpg';
import cert3 from '../assets/certificates/cert-nodejs.jpg';
```

**Step 3 - Update the certificates array (around line 27):**

```javascript
const certificates = [
  {
    id: 1,
    name: 'AWS Certified Developer - Associate',
    image: cert1,
  },
  {
    id: 2,
    name: 'React Professional Certification',
    image: cert2,
  },
  {
    id: 3,
    name: 'Node.js Full Stack Developer',
    image: cert3,
  },
  // Add more certificates as needed
];
```

**Adding More Certificates:**

Just add more objects to the array! The layout automatically adjusts.

```javascript
{
  id: 4,
  name: 'MongoDB Certified Developer',
  image: cert4,
},
```

**Certificate Image Tips:**
- Format: JPG or PNG
- Recommended size: 600x400px (3:2 ratio)
- Keep file size under 500KB each
- Use clear, readable images
- Consider cropping to show only the important parts

---

### 4. Update Personal Information

**File**: `src/components/Introduction.js`

**Your Name** (line 78):
```javascript
<h2 className="intro-name">Your Name Here</h2>
```

**Your Title** (Already using translations):
Edit in `src/i18n.js`:
- Line 15 (English): `"intro.title": "Your Title"`
- Line 80 (Vietnamese): `"intro.title": "Tiêu đề của bạn"`

---

### 5. Customize Tab Content

**File**: `src/i18n.js`

**About Me Section:**
```javascript
// English (line 21)
"intro.about.description": "Your personal description here...",

// Vietnamese (line 86)
"intro.about.description": "Mô tả cá nhân của bạn...",
```

**Experience Section:**
```javascript
// English (lines 22-24)
"intro.experience.years": "5+ Years",
"intro.experience.description": "Your experience description...",

// Vietnamese (lines 87-89)
"intro.experience.years": "Hơn 5 năm",
"intro.experience.description": "Mô tả kinh nghiệm...",
```

**Education Section:**
```javascript
// English (lines 25-27)
"intro.education.degree": "Your Degree",
"intro.education.university": "Your University",

// Vietnamese (lines 90-92)
"intro.education.degree": "Bằng cấp của bạn",
"intro.education.university": "Trường đại học của bạn",
```

---

## 🎨 Styling Customization

### Change Auto-Rotation Timer

**Default**: 10 seconds

**File**: `src/components/Introduction.js` (line 15)

```javascript
// Change 10000 to your desired milliseconds
// 5 seconds = 5000
// 15 seconds = 15000
}, 10000);
```

### Disable Auto-Rotation (Manual Only)

Comment out the useEffect in `Introduction.js` (lines 11-19):

```javascript
// useEffect(() => {
//   const timer = setInterval(() => {
//     setActiveTab((prev) => (prev + 1) % tabs.length);
//   }, 10000);
//   return () => clearInterval(timer);
// }, [tabs.length]);
```

### Change Colors

**File**: `src/components/Introduction.css`

Main green color references (search and replace):
- `#22c55e` - Main green
- `#16a34a` - Dark green
- `#166534` - Darker green
- `#f0fdf4` - Light green background

---

## 📱 Responsive Behavior

The layout automatically adapts:

**Desktop (>968px):**
- Side-by-side layout
- Left sidebar is sticky (stays visible while scrolling)

**Tablet (768px-968px):**
- Narrower sidebar
- Adjusted spacing

**Mobile (<768px):**
- Stacked layout (top to bottom)
- Avatar section on top
- Tab content below
- Optimized button sizes

---

## 🐛 Troubleshooting

### Resume button not working
- Check file names match exactly: `resume-en.pdf` and `resume-vi.pdf`
- Ensure files are in the `public/` folder
- Clear browser cache and refresh

### Certificates not showing
- Check image imports at the top of `Introduction.js`
- Verify file paths are correct
- Check browser console for errors (F12)

### Avatar not displaying
- Check image path
- Verify image file exists
- Check for typos in file name

### Auto-rotation not working
- Check browser console for errors
- Verify the useEffect code is not commented out

### Tabs not switching on click
- Check for JavaScript errors in console
- Ensure the handleTabClick function is working

---

## 💡 Advanced Customizations

### Add a Fourth Tab

1. Update the tabs array in `Introduction.js` (line 10):
   ```javascript
   const tabs = ['about', 'experience', 'education', 'skills'];
   ```

2. Add translations in `i18n.js`

3. Add a new tab button in the JSX

4. Add a new AnimatePresence case for the content

### Change Animation Speed

In `Introduction.js`, find the contentVariants transition (line 62):

```javascript
transition={{ duration: 0.5 }} // Increase for slower, decrease for faster
```

### Make Certificate Cards Clickable

Add an onClick handler to certificate cards (around line 167):

```javascript
<div 
  className="certificate-card"
  onClick={() => window.open(cert.link, '_blank')}
>
```

Then add links to your certificates array:

```javascript
{
  id: 1,
  name: 'AWS Certified',
  image: cert1,
  link: 'https://verify.certificate.com/your-cert'
}
```

---

## ✅ Quick Checklist

- [ ] Replace resume PDFs (English & Vietnamese)
- [ ] Add your avatar photo
- [ ] Update personal name
- [ ] Upload certificate images
- [ ] Update certificate names in code
- [ ] Customize About Me description
- [ ] Update Experience details
- [ ] Update Education information
- [ ] Test resume download (both languages)
- [ ] Test on mobile devices
- [ ] Test tab switching
- [ ] Verify auto-rotation works
- [ ] Check all translations

---

## 🎉 You're All Set!

Your redesigned introduction section is ready to impress! The combination of auto-rotation, manual control, and beautiful animations creates an engaging user experience.

**Need help?** Check the browser console (F12) for any errors or issues.

**Pro Tip**: Record yourself navigating the site to see how the auto-rotation feels. Adjust the timer if it feels too fast or slow!

