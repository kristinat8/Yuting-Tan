---
layout: page
title: "Beyond Research"
permalink: /beyond/
description: "A glimpse into the moments that keep me grounded and inspired outside research."
nav: true
nav_order: 6
---

<h2 id="life-moments" class="mt-4">Life Moments</h2>
<p class="text-muted">A few snapshots from my personal journey.</p>

<div class="row row-cols-1 row-cols-sm-2 g-3">
  {% for item in site.data.beyond.life_moments %}
  <div class="col">
    <div class="card h-100 shadow-sm br-card">
      <a href="{{ item.src | relative_url }}" class="glightbox" data-gallery="life-moments" data-title="{{ item.caption }}">
        <img class="card-img-top" src="{{ item.src | relative_url }}" alt="{{ item.caption }}">
      </a>
      {% if item.caption %}
      <div class="card-body">
        <p class="card-text small">{{ item.caption }}</p>
      </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<h2 id="campus-companions" class="mt-5">Campus Companions</h2>
<p class="text-muted">The little friends I've met on campus.</p>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  {% for item in site.data.beyond.campus_animals %}
  <div class="col">
    <div class="card h-100 shadow-sm br-card">
      <a href="{{ item.src | relative_url }}" class="glightbox" data-gallery="campus-animals" data-title="{{ item.caption }}">
        <img class="card-img-top" src="{{ item.src | relative_url }}" alt="{{ item.caption }}">
      </a>
      {% if item.caption %}
      <div class="card-body">
        <p class="card-text small">{{ item.caption }}</p>
      </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<h2 id="bookshelf" class="mt-5">My Bookshelf</h2>
<p class="text-muted">A small collection that has broadened my perspective.</p>

<div class="row row-cols-2 g-3">
  {% for b in site.data.beyond.books %}
  <div class="col">
    <div class="card h-100 shadow-sm br-card">
      {% if b.link %}
      <a href="{{ b.link }}" target="_blank" rel="noopener">
        <img class="card-img-top" src="{{ b.cover | relative_url }}" alt="{{ b.title }}">
      </a>
      {% else %}
      <img class="card-img-top" src="{{ b.cover | relative_url }}" alt="{{ b.title }}">
      {% endif %}
      <div class="card-body">
        <strong class="d-block">{{ b.title }}</strong>
        <span class="text-muted small">{{ b.author }}</span>
        {% if b.note %}
        <p class="card-text small mt-2">{{ b.note }}</p>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
