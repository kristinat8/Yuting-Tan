---
layout: page
title: "Beyond Research"
permalink: /beyond/
description: "A glimpse into the moments that keep me grounded and inspired outside research."
nav: true
nav_order: 6
---

<div class="mb-4">
  <p class="lead">
    This page is a glimpse into the moments and activities that keep me grounded and inspired outside research.
  </p>
</div>

<!-- ===== Timeline (childhood -> now) ===== -->
<h2 id="timeline" class="mt-5">Timeline</h2>
<p class="text-muted">From childhood curiosity to my current journey in Computer Science.</p>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
  {% for item in site.data.beyond.timeline %}
  <div class="col">
    <div class="card h-100 shadow-sm br-card">
      <a href="{{ item.src | relative_url }}" class="glightbox" data-gallery="timeline" data-title="{{ item.caption }}">
        <img class="card-img-top" src="{{ item.src | relative_url }}" alt="{{ item.caption }}">
      </a>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <strong>{{ item.title }}</strong>
          {% if item.year %}<span class="badge bg-secondary">{{ item.year }}</span>{% endif %}
        </div>
        {% if item.caption %}
        <p class="card-text small mt-2">{{ item.caption }}</p>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>

<!-- ===== Books I Love ===== -->
<h2 id="books" class="mt-5">Books I Love</h2>
<p class="text-muted">A small shelf that has broadened my perspective.</p>

<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
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

<!-- ===== Tennis & Outdoor ===== -->
<h2 id="tennis-outdoor" class="mt-5">Tennis & Outdoor</h2>
<p class="text-muted">Practising focus, resilience, and staying curious about the world.</p>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  {% for p in site.data.beyond.tennis_outdoor %}
  <div class="col">
    <div class="card h-100 shadow-sm br-card">
      <a href="{{ p.src | relative_url }}" class="glightbox" data-gallery="tennis_outdoor" data-title="{{ p.caption }}">
        <img class="card-img-top" src="{{ p.src | relative_url }}" alt="{{ p.caption }}">
      </a>
      {% if p.caption %}
      <div class="card-body">
        <p class="card-text small">{{ p.caption }}</p>
      </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<!-- ===== Campus Cats ===== -->
<h2 id="campus-cats" class="mt-5">Campus Cats</h2>
<p class="text-muted">Little companions that remind me of kindness and responsibility.</p>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  {% for c in site.data.beyond.cats %}
  <div class="col">
    <div class="card h-100 shadow-sm br-card">
      <a href="{{ c.src | relative_url }}" class="glightbox" data-gallery="cats" data-title="{{ c.caption }}">
        <img class="card-img-top" src="{{ c.src | relative_url }}" alt="{{ c.caption }}">
      </a>
      {% if c.caption %}
      <div class="card-body">
        <p class="card-text small">{{ c.caption }}</p>
      </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<!-- ===== Closing ===== -->
<div class="mt-5">
  <em>These small moments — from books and sports to travels and little companions — continually enrich my perspective and inspire my research journey.</em>
</div>