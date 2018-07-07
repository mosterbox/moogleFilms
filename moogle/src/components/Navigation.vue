<template>
    <div id="navigation">
      <div class = "section">
        <img id="section" onclick="myFunction()" src="../assets/menu.png">
      </div>
      <div class="logo">
        <img src="../assets/logo.png">
      </div>
	  <p class="logotype">Mooogle</p>
	  <div class="search">
		<input type="text" placeholder="Search...">
		</input>
	  </div>
	  <div class="menu">
	  <div class="sublogo">
	  <img src="../assets/logo.png">
	  <p>Mooogle</p>
	  </div>
	  <div class="list">
	<a class="films "href="#">Films</a>
	<ul>
		<li><a href="#">subcategory</a></li>
		<li><a href="#">subcategory</a></li>
		<li><a href="#">subcategory</a></li>
	</ul>
	<a class="serials" href="#">Serials</a>
	<ul>
		<li><a href="#">subcategory</a></li>
		<li><a href="#">subcategory</a></li>
		<li><a href="#">subcategory</a></li>
	</ul>
	<a class="favorites" href="#">Favorites</a>
	</div>
	</div>
    </div>
</template>

<style>
.films,
.serials,
.favorites {
font-size: 130%;
margin: 10px;
}
.list li{
margin: 5px;
}
.list{
padding: 10px;
}
.sublogo p {
margin: 5px;
font-size: 150%;
}
.sublogo{
height: 95px;
background-color: #77C1BB;
}
.menu{
display: block;
position: absolute;
top: 0;
left: 0;
width: 200px;
border: 1px solid #cfcfcf;
background-color: #fff;
}
.menu ul{
margin: 0;
padding: 0;
}
.menu li {
list-style-type: none;
}
.menu a,
.menu a:hover,
.menu a:active{
text-decoration: none;
color: #000;
}
.search {
display: block;
position: absolute;
right: 15px;
top: 20px;
}
.logotype{
font-size: 150%;
margin: 5px;
height: 35px;
}
.logo {
height: 32px;
margin: 7px;
}
body {
padding: 0;
margin: 0;
}
#navigation {
font-family: 'Gaegu', cursive;
  display: flex;
  width: 100%;
  background-color: #77C1BB;
  padding: 10px;
}
.section {
margin: 10px;
}
</style>

<script>
function myFunction() {
document.getElementById('section').style.cssText = 'display: block';}
</script>