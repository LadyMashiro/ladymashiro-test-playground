<template>
    <div id="terminal">
        <div id="head"> </div>
        <div id="bar">
            <div id="buttons"></div>
        </div>
        <div id="screen">
            <p class="font">root@localhost:~$</p>
            <p class="machiko"></p>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Terminal',
  props: {
    title: String
  }
}
</script>

<style scoped>
    #head {
        font-family: 'Dank Mono';
        color: #9E9EA1;
        margin: auto;
        padding: 9px;
        font-size: 16px;
        text-align: center;
    }
    #bar {
        text-align: center;
        width: 750px;
        height: 25px;
        background-color: #EDF1F5;
        margin: 0 auto;
        font-family: monospace;
        padding: auto;
        float: none;
        border-radius: 6px 6px 0px 0px;
    }
    #buttons {
        background: url(https://svgshare.com/i/DoU.svg);
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 80px;
        width: auto;
        height:25px;
        margin-left: 6px;
    }
    #screen {
        width: 749px;
        height: 450px;
        border-radius: 0px 0px 6px 6px;
        margin: 0 auto;
        background-color: #434443;
        padding: 1px 0px 1px 1px;
    }
    .machiko {
        background: url(https://svgshare.com/i/Dnh.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 116px;
        width: 116px;
        height: 116px;
        margin: 36% 21px;
        float: right;
    }
    .font {
        color: #9E9EA1;
        font-family: 'Dank Mono';
        font-style: italic;
        font-size: 15px;
        text-align: left;
        position: static;
        padding-left: 16px;
        background-color: #434443;
    }


</style>
