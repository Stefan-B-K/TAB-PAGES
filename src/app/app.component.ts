import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentPage = 0
    images = [
        {
            title: 'At the Beach',
            url: 'http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'
        },
        {
            title: 'Into the Woods',
            url: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/604599-gettyimages-1083893950-458b5d23ecd7e3642caa7280f596693d.jpg'
        },
        {
            title: 'At the River',
            url: 'https://agrocorrn.com/wp-content/uploads/2021/06/Rivers-of-the-World-Cover.jpg'
        },
        {
            title: 'Desert Time',
            url: 'https://th-thumbnailer.cdn-si-edu.com/AMg2HHVpDuLByTS4_WJWJoyNgsU=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ee/54/ee546179-a222-470a-8f7e-147ca1adbcc6/42-56923287.jpg'
        },
        {
            title: 'On the Mountain Top',
            url: 'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg'
        },
        {
            title: 'Meadows All The Way',
            url: 'http://betweenbirdsofprey.icdif.com/wp-content/uploads/2015/08/Green-Fields-hd-pictuers.jpg'
        },
        {
            title: 'At the Beach',
            url: 'http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'
        },
        {
            title: 'Into the Woods',
            url: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/604599-gettyimages-1083893950-458b5d23ecd7e3642caa7280f596693d.jpg'
        },
        {
            title: 'At the River',
            url: 'https://agrocorrn.com/wp-content/uploads/2021/06/Rivers-of-the-World-Cover.jpg'
        },
        {
            title: 'Desert Time',
            url: 'https://th-thumbnailer.cdn-si-edu.com/AMg2HHVpDuLByTS4_WJWJoyNgsU=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ee/54/ee546179-a222-470a-8f7e-147ca1adbcc6/42-56923287.jpg'
        },
        {
            title: 'On the Mountain Top',
            url: 'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg'
        },
        {
            title: 'Meadows All The Way',
            url: 'http://betweenbirdsofprey.icdif.com/wp-content/uploads/2015/08/Green-Fields-hd-pictuers.jpg'
        },
        {
            title: 'At the Beach',
            url: 'http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'
        },
        {
            title: 'Into the Woods',
            url: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/604599-gettyimages-1083893950-458b5d23ecd7e3642caa7280f596693d.jpg'
        },
        {
            title: 'At the River',
            url: 'https://agrocorrn.com/wp-content/uploads/2021/06/Rivers-of-the-World-Cover.jpg'
        },
        {
            title: 'Desert Time',
            url: 'https://th-thumbnailer.cdn-si-edu.com/AMg2HHVpDuLByTS4_WJWJoyNgsU=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ee/54/ee546179-a222-470a-8f7e-147ca1adbcc6/42-56923287.jpg'
        },
        {
            title: 'On the Mountain Top',
            url: 'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg'
        },
        {
            title: 'Meadows All The Way',
            url: 'http://betweenbirdsofprey.icdif.com/wp-content/uploads/2015/08/Green-Fields-hd-pictuers.jpg'
        },
        {
            title: 'At the Beach',
            url: 'http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'
        },
        {
            title: 'Into the Woods',
            url: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/604599-gettyimages-1083893950-458b5d23ecd7e3642caa7280f596693d.jpg'
        },
        {
            title: 'At the River',
            url: 'https://agrocorrn.com/wp-content/uploads/2021/06/Rivers-of-the-World-Cover.jpg'
        },
        {
            title: 'Desert Time',
            url: 'https://th-thumbnailer.cdn-si-edu.com/AMg2HHVpDuLByTS4_WJWJoyNgsU=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ee/54/ee546179-a222-470a-8f7e-147ca1adbcc6/42-56923287.jpg'
        },
        {
            title: 'On the Mountain Top',
            url: 'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg'
        },
        {
            title: 'Meadows All The Way',
            url: 'http://betweenbirdsofprey.icdif.com/wp-content/uploads/2015/08/Green-Fields-hd-pictuers.jpg'
        },
        {
            title: 'At the Beach',
            url: 'http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'
        },
        {
            title: 'Into the Woods',
            url: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/604599-gettyimages-1083893950-458b5d23ecd7e3642caa7280f596693d.jpg'
        },
        {
            title: 'At the River',
            url: 'https://agrocorrn.com/wp-content/uploads/2021/06/Rivers-of-the-World-Cover.jpg'
        },
        {
            title: 'Desert Time',
            url: 'https://th-thumbnailer.cdn-si-edu.com/AMg2HHVpDuLByTS4_WJWJoyNgsU=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ee/54/ee546179-a222-470a-8f7e-147ca1adbcc6/42-56923287.jpg'
        },
        {
            title: 'On the Mountain Top',
            url: 'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg'
        },
        {
            title: 'Meadows All The Way',
            url: 'http://betweenbirdsofprey.icdif.com/wp-content/uploads/2015/08/Green-Fields-hd-pictuers.jpg'
        },
        {
            title: 'At the Beach',
            url: 'http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'
        },
        {
            title: 'Into the Woods',
            url: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/604599-gettyimages-1083893950-458b5d23ecd7e3642caa7280f596693d.jpg'
        },
        {
            title: 'At the River',
            url: 'https://agrocorrn.com/wp-content/uploads/2021/06/Rivers-of-the-World-Cover.jpg'
        },
        {
            title: 'Desert Time',
            url: 'https://th-thumbnailer.cdn-si-edu.com/AMg2HHVpDuLByTS4_WJWJoyNgsU=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ee/54/ee546179-a222-470a-8f7e-147ca1adbcc6/42-56923287.jpg'
        },
        {
            title: 'On the Mountain Top',
            url: 'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg'
        },
        {
            title: 'Meadows All The Way',
            url: 'http://betweenbirdsofprey.icdif.com/wp-content/uploads/2015/08/Green-Fields-hd-pictuers.jpg'
        },
    ]

    showNavLink (index: number): boolean {
        return (this.currentPage < 2 && index < 5) ||
            (Math.abs(this.currentPage - index) < 3) ||
            (this.currentPage > this.images.length - 3 && index > this.images.length - 6)
    }
}
