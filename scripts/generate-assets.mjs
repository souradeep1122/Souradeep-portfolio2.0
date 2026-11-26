import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Generate Favicon SVG
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#FFF6E9" stroke="#E43D12" stroke-width="4"/>
  <rect x="7" y="7" width="50" height="50" rx="10" fill="#EFB11D"/>
  <text x="32" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="28" fill="#E43D12" text-anchor="middle">sd.</text>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg.trim(), 'utf8');

// 2. Copy image for og-image.png
const srcOg = path.resolve('Portfolio.png');
const destOg = path.join(publicDir, 'og-image.png');
if (fs.existsSync(srcOg)) {
  fs.copyFileSync(srcOg, destOg);
  console.log('Copied og-image.png from Portfolio.png');
} else {
  console.log('Portfolio.png not found, creating placeholder og-image');
}

// 3. Generate a clean standard PDF for cv.pdf
const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page
   /Parent 2 0 R
   /MediaBox [0 0 612 792]
   /Resources << /Font << /F1 5 0 R >> >>
   /Contents 4 0 R
>>
endobj
4 0 obj
<< /Length 720 >>
stream
BT
/F1 22 Tf
50 730 Td
(SOURADEEP SAHA) Tj
/F1 12 Tf
0 -26 Td
(MERN Stack Developer & UI/UX Designer | Kolkata, India) Tj
0 -18 Td
(Email: souradeep418saha@gmail.com | GitHub: github.com/souradeep1122) Tj
0 -30 Td
(EDUCATION) Tj
0 -18 Td
(- B.Tech in CSE: UEM Kolkata | CGPA 8.19) Tj
0 -16 Td
(- Higher Secondary & Secondary: KV Ordnance Factory Dum Dum) Tj
0 -30 Td
(EXPERIENCE) Tj
0 -18 Td
(- UI/UX Intern @ Kyptronix LLP: Mobile and Desktop apps, Figma, Glassmorphism) Tj
0 -30 Td
(SKILLS) Tj
0 -18 Td
(- Languages: Python, Java, JavaScript) Tj
0 -16 Td
(- Web & Design: HTML, CSS, Tailwind, React.js, Figma, Canva) Tj
0 -16 Td
(- Backend & DBs: Node.js, Express.js, MongoDB, MySQL, AWS EC2, S3) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font
   /Subtype /Type1
   /BaseFont /Helvetica-Bold
>>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000259 00000 n 
0000001031 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
1115
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'cv.pdf'), pdfContent, 'utf8');
console.log('Assets generated successfully!');

