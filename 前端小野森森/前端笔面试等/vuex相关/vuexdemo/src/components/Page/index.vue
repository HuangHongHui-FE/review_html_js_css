<template>
    <div>
        {{content[curIdx]}}
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Page',
    // props: {
    //     curIdx: Number,
    // },
    data() {
        return {
            content: [
                '页面1',
                '页面2',
                '页面3',
                '页面4'
            ]
        }
    },
    computed: {
        ...mapState(['curIdx'])
    } 
}
</script>

<style>

</style>