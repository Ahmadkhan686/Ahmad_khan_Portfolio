# MERN Stack Developer Portfolio

A modern, fully responsive portfolio website built with Next.js 14 (App Router) and Tailwind CSS, showcasing full-stack development expertise in the MERN stack.

## 🚀 Features

- **Modern UI/UX**: Clean, minimalistic design with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Fully Responsive**: Optimized for all screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Sections Included**:
  - Hero section with animated intro
  - About section with skill progress bars
  - Projects showcase (6+ demo projects)
  - Backend knowledge section
  - Contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component

## 📦 Installation

1. **Clone or download this repository**

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Navigation.tsx      # Sticky navigation with theme toggle
│   ├── ThemeProvider.tsx   # Dark/light mode context provider
│   └── sections/
│       ├── Hero.tsx        # Hero section with CTAs
│       ├── About.tsx       # About section with skills
│       ├── Projects.tsx    # Projects showcase grid
│       ├── BackendKnowledge.tsx  # Backend expertise section
│       └── Contact.tsx     # Contact form and info
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/sections/Hero.tsx`):

   - Change name, title, and description
   - Update social media links
   - Modify CTA button links

2. **About Section** (`components/sections/About.tsx`):

   - Update bio and experience description
   - Modify skills list and proficiency levels

3. **Projects** (`components/sections/Projects.tsx`):

   - Replace dummy projects with your actual projects
   - Update project images, descriptions, and links
   - Modify tech stack tags

4. **Contact Section** (`components/sections/Contact.tsx`):
   - Update email, phone, and location
   - Modify social media links
   - Connect form to your backend/email service

### Styling

- Colors can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### Theme Colors

The portfolio uses a blue-to-purple gradient theme. To change:

- Update gradient classes in components (e.g., `from-blue-600 to-purple-600`)
- Modify color scheme in `tailwind.config.ts`

## 📝 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This portfolio can be deployed to:

- **Vercel** (Recommended for Next.js):

  ```bash
  npm i -g vercel
  vercel
  ```

- **Netlify**: Connect your GitHub repository

- **Other platforms**: Build the project and deploy the `out` folder (if using static export)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Built with ❤️ using Next.js and Tailwind CSS**
