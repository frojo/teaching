---
layout: page.liquid
title: index
---

# fran's classes
{%- for course in collections.course -%}
  <div>
    <a href="/{{ course.data.id | slugify }}/">
      {{ course.data.title }}
    <a>
  </div>
{%- endfor -%}

