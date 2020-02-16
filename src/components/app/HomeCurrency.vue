<template>
    <div class="col s12 m6 l8">
        <div class="card orange darken-3 bill-card">
            <div class="card-content white-text">
                <div class="card-header">
                    <span class="card-title">Курс валют (Приват Банк)</span>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Валюта</th>
                        <th>Покупка</th>
                        <th>Продажа</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="cur in currency">
                        <td>{{cur.ccy}}</td>
                        <td>{{Number(cur.buy).toFixed(2)}} {{ cur.base_ccy }}</td>
                        <td>{{Number(cur.sale).toFixed(2)}} {{ cur.base_ccy }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['currency']
    }
</script>

<style>
    .bill-card {
        height: 400px;
    }
</style>
