import $ from 'jquery'
import './app2.css'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e) => {
    // console.log(e.currentTarget)
    //注意这里需要使用currentTarget，而不是target
    const $li = $(e.currentTarget)
    const index = $li.index()
    // console.log(index)
    $tabContent.children().eq(index)
        // .css({ display: 'block' })
        //注意 这是行为和样式绑定的行为不建议使用
        .addClass('active')
        .siblings()
        // .css({ display: 'none' })
        //注意 这是行为和样式绑定的行为不建议使用
        .removeClass('active')
    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected')
    //只使用js控制css的增减而不能直接操作css样式
})

$tabBar.children().eq(0).trigger('click')
