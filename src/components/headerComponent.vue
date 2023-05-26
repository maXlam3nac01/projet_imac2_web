<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/search">Search</router-link></li>
                <li><router-link to="/crew">By Director</router-link></li>
                <li><router-link to="/year">By Crew</router-link></li>
            </ul>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: 'HeaderComponent'
}
</script>
  
<style scoped>
header {
    background-color: #f8f9fa;
    padding: 10px;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}

router-link-active {
    font-weight: bold;
}
</style>