# aaronkyriesenbach.com

Personal site, built with [Zola](https://www.getzola.org/).

## Structure

- `content/work.md`, `content/music.md`, `content/resume.md` — standalone "about me" pages
- `content/projects/` — tagged project pages (`computer` / `music`), rendered as a card grid, kept out of the build for now (see below)
- `content/blog/` — blog section, kept out of the build for now (see below)
- `templates/`, `static/` — a small hand-rolled theme (JetBrains Mono, dark/light toggle)

## Enabling the blog / projects

Both sections are fully built out but disabled by default, using the same two-step toggle:

- **Blog:** remove `draft = true` from `content/blog/_index.md`, then set `blog_enabled = true` in `config.toml`
- **Projects:** remove `draft = true` from `content/projects/_index.md`, then set `projects_enabled = true` in `config.toml`

Until then, `zola build` skips each section entirely (no pages, no nav link).
Preview either locally anytime with `zola serve --drafts`.

## Local development

```sh
docker run --rm -it -p 1111:1111 -v $(pwd):/app -w /app ghcr.io/getzola/zola:v0.23.4 serve --interface 0.0.0.0
```

## Production build

```sh
docker compose up --build
```

Serves the built site at <http://localhost:8080>.
