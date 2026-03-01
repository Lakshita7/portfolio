# Agent prompt: fill portfolio from resume

Use this prompt with an agent (e.g. in Cursor) after attaching your **resume** and this repo. The agent should extract the required data and update the codebase so the site shows your information.

---

## Prompt to paste into the agent

```
I'm customizing my portfolio site. I've attached my resume (and any extra details below).

**Your task:** Read my resume and any details I provide, then update this codebase so the portfolio shows my real data everywhere. Preserve the existing structure and styling; only change content and links.

Update these places with data from my resume/details:

1. **Hero** (`src/components/portfolio/Hero.tsx`)
   - Tagline (e.g. "Designer & Developer") → replace with my role/title
   - First name and last name (replace "John" / "Doe")
   - Short intro paragraph (replace the default bio)

2. **Navbar** (`src/components/portfolio/Navbar.tsx`)
   - Logo/initials (e.g. "JD") → use my initials

3. **About** (`src/components/portfolio/About.tsx`)
   - Headline sentence (who I am / what I do)
   - Longer bio paragraph
   - Skills list (replace the default list with my skills/tech stack)

4. **Projects** (`src/components/portfolio/Projects.tsx`)
   - Replace the `projects` array with my real projects. Each item: `{ title, category, description, year }`. Use resume projects, side projects, or coursework—and real URLs if I provided them.

5. **Blog** (`src/components/portfolio/Blog.tsx`) — optional
   - If I provided blog posts or a blog URL: update the `posts` array with `{ title, excerpt, date, url }`, and set the "View all" link to my blog (e.g. Substack/Medium).
   - If I have no blog: either leave placeholder posts or remove/hide the Blog section as appropriate.

6. **Resume** (`src/components/portfolio/Resume.tsx`)
   - **Experience:** Replace the `experience` array. Each item: `{ role, company, period, description }`.
   - **Education:** Replace the `education` array. Each item: `{ degree, school, year }`.
   - If I gave a resume PDF URL, set the download button `href` to that URL.

7. **Contact** (`src/components/portfolio/Contact.tsx`)
   - Email (replace "hello@johndoe.com")
   - Social links: replace the placeholder array with my real links (GitHub, LinkedIn, Twitter/X, etc.). Format: `{ label: "GitHub", href: "https://..." }`.

8. **Footer** (`src/components/portfolio/Footer.tsx`)
   - Replace "John Doe" with my full name for the copyright line.

9. **Page title and meta** (`index.html`)
   - Set `<title>` and meta description to my name and a short tagline (e.g. "Jane Smith — Software Engineer").
   - Set `meta name="author"` to my name if desired.

**Rules:**
- Only change content and URLs; don’t refactor components or styling unless something is broken.
- Keep the same data shapes (arrays of objects, same field names) so the site keeps working.
- If something isn’t on my resume or in my details, use sensible placeholders and add a short comment like `// TODO: add X` so I can fill it later.
```

---

## Optional: what to tell the agent in your message

When you run the agent, you can add things like:

- **Resume:** “Use the attached resume PDF” or “Use the resume text in the next message.”
- **Blog:** “I don’t have a blog—hide the Blog section” or “My blog is at https://…”
- **Projects:** “Include only work projects” or “Add these side projects: [list].”
- **Social:** “My LinkedIn is …, GitHub is …, no Twitter.”
- **Resume PDF:** “Download link for my resume: …”

The agent should then fill all the listed files so the portfolio reflects your resume and details.
