<template lang="">
    <div class="mt-4">
        <h1>404 Not Found</h1>
        <h3>존재하지 않는 요청 경로 : {{curRoute.path}}</h3>
    </div>
</template>
<script>
import {useRoute} from 'vue-router';
export default {
    setup() {
        const curRoute = useRoute();
        return {curRoute};
    }
}
</script>
<style scoped>
    h1 {
        font-weight: bold;
    }
</style>