<template>
    <div class="director dir-next" v-if="dir === 'next'">
        <a href="javascript:;" @click="dirClick(dir)">left</a>
    </div>

    <div class="director dir-next" v-else-if="dir === 'prev'">
        <a href="javascript:;" @click="dirClick(dir)">right</a>
    </div>
</template>


<script>

export default {
    name: 'Director',
    props: {
        dir: String
    },


    setup(props, ctx) {
        const dirClick = (dir) => {
            ctx.emit('dirClick', dir);
        }

        return {
            dirClick
        }      
    },
}
</script>



<style scoped>
    .direator {
        position: absolute;
        top: 50%;
        z-index: 8;
        margin-top: -15px;
        width: 20px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        color: rgb(32, 207, 207);
        text-decoration: none;
        
    }

    .dir-next{
        right: 0;
    }

    .dir-prev{
        left: 0;
    }
</style>
