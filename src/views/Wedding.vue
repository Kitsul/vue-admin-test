<template>
    <div>
        <div class="row">
            <div class="col  s1 offset-s11">
                <a class="btn-floating btn-large waves-effect waves-light red">
                    <i class="material-icons">add</i>
                </a>
            </div>
        </div>
        <div>
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header row">
                        <div class="row">
                            <p class="col s4">1</p>
                            <p class="col s4">2</p>
                            <p class="col s4">3</p>
                        </div>
                    </div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
            <table Add class="highlight collapsible">
                <thead>
                <tr>
                    <th>Торговая марка</th>
                    <th>Название</th>
                    <th>Коллекция</th>
                    <th>Силуэт</th>
                    <th>Количество</th>
                    <th>Стоимость</th>
                    <th>Закупочная</th>
                    <th>Дата поступления</th>
                    <th>Статус</th>
                    <th>Номер</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'wedding',
        data: () => ({
        }),
        mounted() {
            const elems = document.querySelectorAll('.collapsible');
            const instances = M.Collapsible.init(elems, {});
        },
    }
</script>
