import { View } from "./view.js"
export class Controller {
    constructor() {
        this.view = new View();
        this.transition = new PageTransition({ targetId: "is_main_page" });
        this.view.initTable();
        this.initEvent();
    }

    initEvent() {
        this.getList();
        this.view.addEventBtnReload(() => {
            UI.showLoad();
            setTimeout(function () {
                UI.hideLoad();
            }, 800);
        });
        this.view.addEventSave(() => {
            UI.snackBar({
                status: "success",
                message: "HELLO D SOUND"
            });
            RightDialog.showLoadRightDialog();
            setTimeout(() => {
                RightDialog.hideLoadRightDialog();

            }, 1000);
        });
        this.view.addEventView(() => {

            this.transition.push({
                targetId: "is_view_page",
                title: "View-Detail",
                url: "View-Detail",
                data: '',
            });

            // UI.alert(
            //     {
            //         icon: "fa fa-lock",
            //         title: "គ្មានការអនុញ្ញាត",
            //         content: "អ្នកមិនត្រូវបានអនុញ្ញាតឧ្យ <b>បង្កើត</b> បានទេសូមទំទាក់ទំទង់ទៅកាន់អ្នកគ្រប់គ្រង់សម្រាប់ព័ត៍មានបន្ថែម"
            //     }, () => {
            //     });

        });
        this.view.addEventBackpage(() => {
            this.transition.pop();
        });
        this.view.addEventDelete(() => {
            Confirm.askDelete({ title: "បញ្ចាក់", content: "តើអ្នកពិតជាចង់លុបមេនទេ?" }, () => {

            });
        });
        this.view.addEventUpdate(() => {
            UI.askUpdate({ title: "បញ្ចាក់", content: "តើអ្នកចង់អាប់ដេតមេនទេ?" }, () => {

            });
        });
        this.view.evnetPagination((page) => {
            UI.showLoad();
            this.view.initPagination({ page: page, record: 10, total: 100 });
            setTimeout(function () {
                UI.hideLoad();
            }, 800);
        });
        this.view.initFilterRecord(() => {
            UI.showLoad();
            setTimeout(function () {
                UI.hideLoad();
            }, 800);
        });
        this.view.initFilterSearch(() => {
            UI.showLoad();
            setTimeout(function () {
                UI.hideLoad();
            }, 800);
        });
        this.view.addEventAddCreate();
        this.view.addEventCloseModalCreate();
    }
    getList() {
        $.ajax({
            type: 'GET',
            url: "https://jsonplaceholder.typicode.com/posts",
            dataType: "json",
            success: (data) => {
                console.log(data);
            },
        });
        let data = [
            { Name: "KOY DA", UserCreate: "ADMIN", DateCreate: "20-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOM SAN", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KAM DARA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "01-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KOY DA", UserCreate: "ADMIN", DateCreate: "20-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOM SAN", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KAM DARA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "01-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KOY DA", UserCreate: "ADMIN", DateCreate: "20-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOM SAN", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KAM DARA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "01-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KOY DA", UserCreate: "ADMIN", DateCreate: "20-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOM SAN", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KAM DARA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "01-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KOY DA", UserCreate: "ADMIN", DateCreate: "20-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOM SAN", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KAM DARA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "01-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KOY DA", UserCreate: "ADMIN", DateCreate: "20-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOM SAN", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "KAM DARA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SREY LARN", UserCreate: "ADMIN", DateCreate: "30-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "MAKA RASOM", UserCreate: "ADMIN", DateCreate: "01-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
            { Name: "SOVEN RAKA", UserCreate: "ADMIN", DateCreate: "10-01-2022", UserUpdate: "KOY DA", DateUpdate: "10-01-2022" },
        ];
        this.view.drawTable(data);
        this.view.initPagination({ page: 1, record: 10, total: 100 });
        UI.showLoad();
    }
}
$(document).ready(function () {
    new Controller();
});