<template>
  <div class="footer">
    <p class="footer__copyright">© 2019 by Sheng Chenni</p>
    <div class="footer__contact">
      <span>
        <i class="fab fa-instagram"></i>
        <a href="https://www.instagram.com/sheng.jewellery/">sheng.jewellery</a>
      </span>
      <span>
        <i class="fas fa-at"></i>
        <a href="mailto:shengchenni2017@gmail.com">shengchenni2017@gmail.com</a>
      </span>
      <span>
        <i class="fas fa-phone"></i>
        <a href="tel:+4407514116528">+44 (0) 7514116528</a>
      </span>
    </div>
  </div>
</template>

<style scoped>
.footer {
  border-top: 1px solid #eee;
  position: absolute;
  width: 100%;
  height: 4rem;
  background-color: white;
  bottom: 0;
}

.footer__copyright {
  opacity: 0.4;
  margin-bottom: .3rem;
}

.footer__contact {
  padding-bottom: 1rem;
}

.footer__contact span {
  display: inline-block;
  opacity: .7;
  margin: .5rem 0;
}

i {
  margin-left: 1.2rem;
  margin-right: 0.3rem;
  opacity: .8;
}

a {
  color: inherit;
}
</style>
