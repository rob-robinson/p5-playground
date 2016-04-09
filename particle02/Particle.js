
  // Daniel Shiffman
  // code for https://youtu.be/vqE8DMfOajk

  function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(20,25);

    this.history = [];

    this.update = function() {
      this.x += random(-10, 10);
      this.y += random(-10, 10);

      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);;
    }

    this.show = function() {
      noStroke();
      var px = floor(this.x / vScale);
      var py = floor(this.y / vScale);

      var col = video.get(px, py);

      fill(col[0], col[1], col[2], col[3]);
      ellipse(this.x, this.y, this.r, this.r);

    }

  }
