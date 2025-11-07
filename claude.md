
# Portfolio Website Blueprint

🎯 **Project Overview**

This portfolio website showcases professional work and skills with a responsive design for Desktop, Tablet, and Mobile screens. Personal details and content are stored in `details.md`.

---

## 🎨 Design System

### Color Theme
- Primary Color: [Define in details.md]
- Secondary Color: [Define in details.md]
- Accent Color: [Define in details.md]
- Additional colors as needed (minimum 3 colors required)

### Typography
- Font Style: [Define in details.md]
- Lorem ipsum can be used for placeholder text during development
- Maintain consistent font family across all sections

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

---

## 📦 Website Components

### 1️⃣ Navigation Bar
**Requirements:**
- Fixed/Sticky positioning
- Responsive hamburger menu for mobile
- Smooth scroll behavior to sections

**Navigation Items:**
- Home
- About Me
- Skills
- Projects
- Contact
- Resume (downloadable)

---

### 2️⃣ Homepage/About Me Section
**Must Include:**
- Professional name (from details.md)
- One professional photo only
- Formal introduction (2-3 lines from details.md)
- Downloadable Resume button
- Responsive across all screen sizes

---

### 3️⃣ Projects Section
**Display 4-5 Best Projects with:**
- Project cover image
- Project title
- Project description
- Technology stack badges (highlighted)
- Two action buttons per project:
  - **GitHub** repository link (opens in new tab)
  - **Live deployment/Demo video** link (opens in new tab)

**Important Notes:**
- All project details visible without clicking
- Cards must be responsive on all devices
- Showcase core competencies (e.g., MERN student → Full-Stack projects; JAVA student → JAVA projects)
- Backend projects without deployment must have demo video (single person, not group)
- All links must be functional and verified
- Ensure GitHub and deployment links open in new tabs

---

### 4️⃣ Skills & Tools Section
**Two Sub-sections:**

**Technical Skills:**
- HTML, CSS, JavaScript
- CSS Libraries/Frameworks learned
- Backend technologies (if applicable)
- Database technologies (if applicable)
- Display with hero images/icons

**Development Tools:**
- VS Code
- Git & GitHub (with hero image)
- Other relevant tools from details.md
- Display with logo images

**Requirements:**
- Tech stack icons must be highlighted to match design
- Section must be responsive on all screen sizes

---

### 5️⃣ GitHub Statistics Section
**Integration Requirements:**

Use these specific libraries:
- **GitHub Stats Card**: [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- **GitHub Calendar/Contribution Graph**: [github-calendar by Bloggify](https://github.com/Bloggify/github-calendar)

**Display:**
- GitHub stats card
- GitHub calendar/contribution graph
- Language statistics (optional)
- Responsive design for all screen sizes

---

### 6️⃣ Contact Section
**Required Elements:**
- LinkedIn profile link (mandatory)
- GitHub profile link (mandatory)
- Phone number (from details.md)
- Email address (from details.md)
- Additional social media links as needed
- All social links must open in new tabs

---

### 7️⃣ Footer
- Copyright information
- Quick navigation links
- Social media icons

---

## 🔧 Technical Requirements

### Favicon
- Small icon for browser tab
- Enhances professional appearance
- Makes site recognizable in bookmarks
- Must be visible in browser tab

### Resume Download
**Implementation:**
- Resume button in Navigation bar
- Resume button in About Me section
- Downloads PDF format on click
- Google Drive link opens in new tab as backup
- **File naming convention**: `Firstname-Lastname-Resume.pdf`
  - Example: `Ankit-Verma-Resume.pdf`

### File Structure
```
portfolio/
├── index.html
├── details.md              # Personal information
├── claude.md              # This instruction file
├── README.md
├── assets/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── skills/
│   ├── resume/
│   │   └── Firstname-Lastname-Resume.pdf
│   └── favicon/
│       └── favicon.ico
├── css/
│   └── styles.css
└── js/
    └── script.js
```

### Deployment
- **Platform**: GitHub Pages
- **URL format**: `https://username.github.io/portfolio` or `https://username.github.io`
- **Repository naming**: For personal site use `username.github.io`, for project use any repo name

**Deployment Steps:**
1. Create GitHub repository
2. Push portfolio code to repository
3. Enable GitHub Pages in repository settings (Settings → Pages)
4. Verify live deployment at generated URL

---

## ✅ Quality Checklist

### Content Quality
- [ ] Grammar and spell-checked throughout
- [ ] All personal information from details.md integrated
- [ ] Professional tone maintained throughout
- [ ] No Lorem Ipsum in final production version

### Functionality Testing
- [ ] All navigation links working
- [ ] All GitHub links working and correct
- [ ] All deployment links functional (open in new tab)
- [ ] Resume download working properly
- [ ] Resume filename follows format: `Firstname-Lastname-Resume.pdf`
- [ ] Contact links operational (open in new tab)
- [ ] Navigation smooth and responsive
- [ ] GitHub Stats card loading correctly
- [ ] GitHub Calendar displaying contributions

### Design Verification
- [ ] Minimum 3 colors implemented consistently
- [ ] No font rendering issues
- [ ] Images loading properly with appropriate sizing
- [ ] Proper padding and spacing maintained
- [ ] Animations working smoothly (if implemented)
- [ ] Responsive on Desktop (1024px+)
- [ ] Responsive on Tablet (768px-1023px)
- [ ] Responsive on Mobile (<768px)
- [ ] Favicon visible in browser tab
- [ ] Tech stack badges/icons highlighted properly

### Cross-Browser Testing
**Test portfolio functionality across multiple browsers:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Device Testing
**Ensure consistent experience across devices:**
- [ ] Desktop (various resolutions: 1920px, 1440px, 1024px)
- [ ] Tablet (portrait and landscape orientations)
- [ ] Mobile devices (various sizes: iPhone, Android)

---

## 🚀 Getting Started

1. **Review Requirements**: Read all requirements in this document thoroughly
2. **Populate details.md**: Fill in all personal information, project details, skills, and contact info
3. **Set Up Project Structure**: Create folders and files as per file structure above
4. **Implement Design**: Start with mobile-first responsive design approach
5. **Add Content**: Integrate content from details.md into HTML structure
6. **Integrate GitHub Stats**: Set up github-readme-stats and github-calendar
7. **Test Functionality**: Verify all links, buttons, and responsive behavior
8. **Deploy**: Push to GitHub and enable GitHub Pages
9. **Final Testing**: Perform cross-browser and device testing
10. **Share**: Your portfolio is ready to share with potential employers!

---

## 📝 Important Notes

- **User Experience First**: Prioritize clean navigation and fast loading times
- **Accessibility**: Add ARIA labels, alt text for images, semantic HTML5
- **Performance**: Optimize images (use WebP format where possible)
- **Consistency**: Maintain consistent design language throughout
- **Updates**: Keep portfolio updated with latest projects regularly
- **External Links**: All external links (GitHub, deployment, social media) must open in new tabs
- **Core Competencies**: Focus on showcasing skills relevant to target roles
- **Professional Quality**: Ensure professional photo, grammar, and presentation

---

## 🎯 Success Criteria

Your portfolio is complete when:
- ✅ Deployed live on GitHub Pages with public URL
- ✅ All sections present and functional
- ✅ Responsive on all device sizes
- ✅ All links working correctly
- ✅ Resume downloadable in correct format
- ✅ GitHub Stats and Calendar displaying properly
- ✅ No spelling or grammar errors
- ✅ Professional appearance maintained throughout
- ✅ Cross-browser compatible
- ✅ Fast loading times (<3 seconds)

---

**Refer to `details.md` for all personal information, project details, and specific content.**
```

