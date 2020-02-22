<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">
        <router-link
                v-for="link in links"
                :key="link.url"
                tag="li"
                active-class="active"
                :to="link.url"
                :exact="link.exact">
            <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
        </router-link>
    </ul>
</template>

<script>
    export default {
        props: ['value'],
        data: () => ({
            links: [
                {title: 'Запись на примерку', url: '/record', exact: true},
                {title: 'Свадебные платья', url: '/wedding', exact: true},
                {title: 'Вечерние платья', url: '/evening', exact: true},
                {title: 'Счет', url: '/'},
                {title: 'История', url: '/history'},
                {title: 'Планирование', url: '/planning'},
                {title: 'Категории', url: '/categories'},
            ]
        })
    }
</script>

