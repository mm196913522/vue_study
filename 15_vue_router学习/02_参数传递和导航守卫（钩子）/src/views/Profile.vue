<template>
    <div>
        <h2>下面是档案信息：</h2>
        <p>id:{{$route.query.id}}</p>
        <p>名字:{{$route.query.name}}</p>
        <p>性别:{{$route.query.sex}}</p>
    </div>
</template>

<script>
export default {
    name: 'Profile'
}
</script>