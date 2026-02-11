# Static assets

**Resume**
- Add your CV as **resume.pdf** so the "Download CV" button works.
- Served at: `/resume.pdf`

**Profile photo (Hero section)**
- Add your photo as **profile.jpg** (or **profile.png**) to show it in the Hero.
- In `components/sections/Hero.tsx`, set `PROFILE_IMAGE` to `"/profile.jpg"` or `"/profile.png"` to match your file.
- If the file is missing, the Hero shows a decorative card instead.
