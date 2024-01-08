---
layout: base.liquid
title: index
---

# fran's classes
{%- for course in collections.course -%}
  <div>
    <a href="/courses/{{ course.data.id | slugify }}/">
      {{ course.data.title }}
    <a>
  </div>
{%- endfor -%}

