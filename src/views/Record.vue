<template>
    <div>
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="date-container container">
                    <div class="input-field row s6">
                        <i class="material-icons prefix">perm_contact_calendar</i>
                        <input type="text"
                               id="datepicker"
                               class="datepicker"
                               @click.prevent="openCalendar">
                        <label for="datepicker">Дата</label>
                    </div>

                </div>
                <div class="time-container container">
                    <div class="input-field row s6">
                        <i class="material-icons prefix">access_time</i>
                        <input id="access_time"
                               type="text"
                               class="timepicker"
                               v-model="time"
                               @click.prevent="openTime">
                        <label for="access_time">Время</label>
                    </div>
                </div>
                <div class="name-container container">
                    <div class="input-field row s6">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="icon_prefix"
                               type="text"
                               class="validate"
                               v-model.trim="name">
                        <label for="icon_prefix">Имя</label>
                    </div>
                </div>
                <div class="phone-container container">
                    <div class="input-field row s6">
                        <i class="material-icons prefix">phone</i>
                        <input id="icon_telephone"
                               type="tel"
                               class="validate"
                               v-model="phone"
                        >
                        <label for="icon_telephone">Телефон</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Запись</span>
                            <hr/>
                            <div class="row">
                                <p class="col s4"><span class="flow-text">Дата:</span></p>
                                <p class="col s8"><span class="flow-text">{{ date | date('date') }}</span></p>
                            </div>
                            <div class="row">
                                <p class="col s4"><span class="flow-text">Время:</span></p>
                                <p class="col s8"><span class="flow-text">{{ time }}</span></p>
                            </div>
                            <div class="row">
                                <p class="col s4"><span class="flow-text">Имя:</span></p>
                                <p class="col s8"><span class="flow-text">{{ name }}</span></p>
                            </div>
                            <div class="row">
                                <p class="col s4"><span class="flow-text">Телефон:</span></p>
                                <p class="col s8"><span class="flow-text">{{ phone }}</span></p>
                            </div>
                        </div>
                        <div class="card-action">
                            <a href="#" class="waves-effect waves-light" @click.prevent="clearCard">Очистить</a>
                            <a href="#modal1" class="modal-trigger waves-effect waves-light">Записать</a>
                            <!-- Modal Structure -->
                            <div id="modal1" class="modal">
                                <div class="modal-content">
                                    <h4 class="center-align flow-text">Подтвердить запись</h4>
                                    <hr/>
                                    <p class="center-align flow-text">{{ name }} на {{ date | date('date')}}</p>
                                </div>
                                <div class="modal-footer">
                                    <a href="#!" class="modal-close waves-effect waves-green btn-flat"
                                       @click.prevent="accept">Подтвердить</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import messages from "../utils/messages";

    export default {
        name: 'record',
        data: () => ({
            date: new Date(),
            time: '',
            name: '',
            phone: ''
        }),
        mounted() {
            const elems = document.querySelectorAll('.modal');
            const instances = M.Modal.init(elems, {});
        },
        methods: {
            accept() {
                this.$store.commit('setInfoRecord', {
                    date: this.date,
                    time: this.time,
                    name: this.name,
                    phone: this.phone
                });
            },
            openCalendar(event) {
                const instances = M.Datepicker.init(event.target, {
                    format: 'dd mmmm yyyy',
                    setDefaultDate: true,
                    defaultDate: new Date(),
                    onSelect: x => {
                        this.date = x;
                        console.log(this.$store.getters.infoRecord);
                    },
                    i18n: {
                        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                        monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
                        weekdays: ['Понедельник', 'Вторник', 'Среда', 'Чеверг', 'Пятница', 'Суббота', 'Воскресенье'],
                        weekdaysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                        weekdaysAbbrev: ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'],
                        cancel: 'Отмена',
                        clear: 'Очистить',
                        done: 'Выбрть',
                    }

                });
                instances.open();

            },

            openTime(event) {
                const instances = M.Timepicker.init(event.target, {
                    onCloseEnd: x => {
                        const elem = document.getElementById('access_time');
                        this.time = elem.value;
                    },
                });
                instances.open();
            },
            clearCard() {
                this.date = new Date();
                this.time = '';
                this.name = '';
                this.phone = '';
            }
        }
    }
</script>

<style>
    span {
        margin-right: 50px;
    }
</style>
