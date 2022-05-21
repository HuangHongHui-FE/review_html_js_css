<template>
    <div :class="['message-box', type]">
        <div class="inner">
            <header class="header">
                <h1 class="title">{{title}}</h1>
                <span class="close-btn">X</span>
            </header>
            <div class="content">
                {{content}}
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "MessageBox",
    props: {
        title: {
            type: String,
            default: 'This is TITLE'
        },
        content: {
            type: String,
            default: "This is CONTENT"
        },
        type: {
            type: String,
            default: 'primary',
            validator(value){  // 进行传过来数据的验证
                return [
                    'primary',
                    'success',
                    'warn',
                    'danger'
                ].includes(value);
            }
        }
    }
}
</script>

<style scoped lang="less">
    body{
        margin: 0;
    }
    h1{
        margin: 0;
        font-weight: normal;
    }
    .message-box{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);

        .inner{
            position: absolute;
            top: 100px;
            left: 50%;
            width: 500px;
            margin-left: -250px;
            background-color: #fff;
            box-shadow: 1px 3px 5px #ededed;
            border-radius: 5px;
            overflow: hidden;

            .header{
                height: 44px;
                padding: 0 10px;
                line-height: 44px;
                box-sizing: border-box;

                .title{
                    float: left;
                    font-size: 16px;
                }

                .close-btn {
                    float: right;
                    cursor: pointer;
                }
            }

            .content {
                padding: 20px;
                box-sizing: border-box;
            }
        }

        &.primary{
            header{
                background-color: blue;
                color: #fff;
            }
        }
        &.success{
            header{
                background-color: green;
                color: #fff;
            }
        }
        &.warn{
            header{
                background-color: orange;
                color: #fff;
            }
        }
        &.danger{
            header{
                background-color: red;
                color: #fff;
            }
        }

    }

    
</style>
