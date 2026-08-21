# aaronkyriesenbach.com

Personal site, built with [Zola](https://www.getzola.org/).

## Structure

- `content/work.md`, `content/music.md`, `content/resume.md` — standalone "about me" pages
- `content/projects/` — tagged project pages (`computer` / `music`), rendered as a card grid
- `content/blog/` — blog section, kept out of the build for now (see below)
- `templates/`, `static/` — a small hand-rolled theme (JetBrains Mono, dark/light toggle)

## Enabling the blog

The blog is fully built out but disabled by default:

1. Remove `draft = true` from `content/blog/_index.md`
2. Set `blog_enabled = true` in `config.toml`

Until then, `zola build` skips the section entirely (no pages, no nav link).
Preview it locally anytime with `zola serve --drafts`.

## Local development

```sh
docker run --rm -it -p 1111:1111 -v $(pwd):/app -w /app ghcr.io/getzola/zola:v0.19.2 serve --interface 0.0.0.0
```

## Production build

```sh
docker compose up --build
```

Serves the built site at <http://localhost:8080>.
