<?php

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/carousel.css">
    <link rel="stylesheet" href="./css/animate.css">
    <link rel="stylesheet" href="./css/styles.css">
    <title>Movie</title>
</head>
<body>
    <header>
        <nav class="navbar fixed-top navbar-expand-md navbar-dark text-white"
        style="background: #2EB26E">
        <a class="text-white navbar-brand" href="#">
            <i class="fab fa-pagelines animate flash"></i>Movie List
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
        aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto menu">
                    <li class="nav-item active">
                        <a href="./index.html" class="nav-link">Home</a>
                    </li>
                </ul>
                <form class="form-inline mt-2 mt-md-0">
                    <a class="text-white nav-link" href="./index.html">
                        <i class="text-warning fas fa-shopping-cart">
                        </i> Movie Database
                        <i style="color:blue" id="cart_n"></i>
                    </a>
                </form>
        </div>
    </nav>
    </header>
   <main role="main">
    <div class="row">
        <div class="col">
            <div class="table-responsive-sm">
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Imdb</th>
                        <th scope="col">Title</th>
                        <th scope="col">Type</th>
                        <th scope="col">Year</th>
                    </tr>
                </thead>
                <tbody id="table">

                </tbody>
                </table>
          </div>    
        </div>
</div>    
    <hr class="feature-divider">
   </main>
   </div>
    <!--Model end-->
     <div class="container">
            <footer>
                <p class="float-right">
                    <a href="#">TOP</a>
                </p>
                <div class="row">
                    Sanru's website
                </div>
            </footer>
     </div>  
    
</main>

    <!--java-->
    <script
    src="https://code.jquery.com/jquery-3.3.1.min.js" 
    integrity="sha256-FgpCb/KJQlLNfOu9lta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous">
    </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha256-ZvOgfh+ptkpoa2Y4HkRY28ir89u/+VRyDE7sB7hEEcI=" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
 <script src="./js/wow.js"></script>
  <script src="main.js"></script>
 <script src="./js/car.js"></script>
</body>
</html>