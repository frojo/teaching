---
layout: page.liquid
title: index
---

# hello!!

{%- for lesson in collections.lesson -%}
  <a href="/{{ lesson.data.title | slugify }}/">
    {{ lesson.data.title }}
  <a>
{%- endfor -%}
