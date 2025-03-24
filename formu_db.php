<!--esta es la parte de adelante que ve el usuario. guardar.php va a ser el intermediario entre frontend y backend. proxima clase. -->
<!DOCTYPE html>
<html lang="es">

  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta name="description" content="Poetry, electronic literature, coding, essays and other things by Fernanda Mugica">
    <meta name="keywords" content="poetry, art, code, philosophy">
    <title>Fernanda Mugica | Bio</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Archivo:500|Open+Sans:300,700" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="vendor/aos/aos.css" rel="stylesheet">
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="css/style.css" rel="stylesheet">
  </head>

  <body>
  <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
    <div class="container py-2 py-md-5">
      <div class="row align-items-start">
        <div class="col-md-2">
          <ul class="custom-menu">
            
          <li><a href="registration.php">Sign up</a></li>
            <li><a href="login.php">Log in</a></li>
            
          </ul>
        </div>
        

        <div class="col-md-6 d-none d-md-block  mr-auto">
          
        </div>
        <div class="col-md-4 d-none d-md-block">   
          <div class="col-sm-12 social text-md-end">
          <a href="http://twitter.com/vanityfer"><span class="bi bi-twitter"></span></a>
          <a href="https://www.facebook.com/fernanda.mugica/"><span class="bi bi-facebook"></span></a>
          <a href="https://www.instagram.com/vanity.fer/?hl=fr"><span class="bi bi-instagram"></span></a>
                  
        </div>
        </div>


      </div>

    </div>
  </div>
  
  
  
  
  <nav class="navbar navbar-light custom-navbar">
    <div class="container">
      <a class="navbar-brand" href="index.html">Home</a>
      <a href="#" class="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar">
        <span></span>
      </a>
    </div>
  </nav>

  <main id="main">

    <section class="section pb-5">
      <div class="container">

        <div class="row mb-5 align-items-end">
          <div class="col-md-6" data-aos="fade-up">
            <h2>CONTACTO</h2>
            <p class="mb-0">
              
            </p>
          </div>

        </div>

        <div class="row">
          <div class="col-md-6 mb-5 mb-md-0" data-aos="fade-up">

            <div class="row">
            <form action="guardar.php" method="post">
         
          
            <div class="row gy-3">
             <div class="col-md-6 form-group">
             <label for="name">Nombre</label>
                  <input type="text" name="nombre" class="form-control" id="nombre" required>
             </div>
          
            <div class="col-md-6 form-group">
            <label for="name">E-mail</label>
                  <input type="email" class="form-control" name="email" id="email" required>
            </div>

            <div class="col-md-12 form-group">
            <label for="name">Asunto</label>
                  <input type="text" class="form-control" name="asunto" id="asunto" required>
             </div>
         
            <div class="col-md-12 form-group">
            <label for="name">Mensaje</label>
                  <textarea class="form-control" name="mensaje" cols="30" rows="10" required></textarea>
              </div>




              <div class="col-md-12 my-3">
                  <div class="loading"></div>
                  <div class="error-message"></div>
                  <div class="sent-message"></div>
                </div>

                <div class="col-md-6 mt-0 form-group">
                  <input type="submit" class="readmore d-block w-100" value="Enviar mensaje">
                </div>
              </div>

            </form>

          </div>
        </div>

          <div class="col-md-4 ml-auto order-2" data-aos="fade-up">
            <ul class="list-unstyled">
              <li class="mb-3">
                <strong class="d-block mb-1">Dirección postal</strong>
                <span>11 de septiembre 4593, Mar del Plata, Buenos Aires, Argentina</span>
              </li>
              <li class="mb-3">
                <strong class="d-block mb-1">Teléfono</strong>
                <span>+54 9 223 6885668</span>
              </li>
              <li class="mb-3">
                <strong class="d-block mb-1">E-mail</strong>
                <span>fernanda.mugica@gmail.com</span>
              </li>
            </ul>
          </div>

        

      </div>

    </section>

  </main>

<!-- ======= Footer ======= -->
<footer class="footer" role="contentinfo">
<div class="container">
<div class="row">
<div class="col-sm-6">
<p class="mb-1"></p>
<div class="credits">
  
</div>
</div>
<div class="col-sm-6 social text-md-end">
<a href="http://twitter.com/vanityfer"><span class="bi bi-twitter"></span></a>
<a href="https://www.facebook.com/fernanda.mugica/"><span class="bi bi-facebook"></span></a>
<a href="https://www.instagram.com/vanity.fer/?hl=fr"><span class="bi bi-instagram"></span></a>
<!--<a href="#"><span class="bi bi-linkedin"></span></a>-->
</div>
</div>
</div>
</footer>

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<!-- Vendor JS Files -->
<script src="vendor/aos/aos.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="vendor/php-email-form/validate.js"></script>
<script src="vendor/swiper/swiper-bundle.min.js"></script>

<!-- Template Main JS File -->
<script src="js/main.js"></script>

</body>

</html>

