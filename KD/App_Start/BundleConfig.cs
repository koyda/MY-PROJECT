using System.Web;
using System.Web.Optimization;

namespace KD
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));
            // s theme style
            bundles.Add(new ScriptBundle("~/bundles/themeScript").Include(
                        "~/Scripts/Function/UI.js",
                        "~/Contect/Plugins/JqueryConfirm/jquery-confirm.js",
                        "~/Content/Plugins/SnackBar/SnackBar.js",
                        "~/Contect/Main/Header.js",
                        "~/Contect/Main/js/activeMenu.js",
                        "~/Contect/Main/js/_contentRightDialog.js",
                          "~/Contect/Main/js/_filterChip.js",
                        "~/Contect/Main/js/tab.js",
                        "~/Content/Main/js/_pageTransition.js",
                        "~/Scripts/Function/filter.js",
                        "~/Scripts/Function/pagination.js",
                        "~/Scripts/Function/ModalDialog.js",
                        "~/Scripts/Function/Module.js",
                        "~/Scripts/Function/translate.js"
          ));
            // e theme style
            //s data table js
            bundles.Add(new ScriptBundle("~/bundles/datatable").Include(
                        "~/Content/Plugins/DataTables/datatables.js",
                        "~/Content/Plugins/DataTables/Responsive-2.2.5/js/responsive.bootstrap4.js",
                        "~/Content/Plugins/DataTables/DataTables-1.10.21/js/dataTables.bootstrap4.js",
                        "~/Content/Plugins/DataTables/FixedHeader-3.1.7/js/dataTables.fixedHeader.js",
                        "~/Content/Plugins/DataTables/FixedHeader-3.1.7/js/fixedHeader.bootstrap4.js",
                        "~/Content/Plugins/DataTables/FixedColumns-3.3.1/js/dataTables.fixedColumns.js"
            ));
            //e data table js
            bundles.Add(new StyleBundle("~/Content/css").Include(
                        "~/Content/bootstrap.css",
                       "~/Content/Plugins/remixicon/remixicon.css",
                        "~/Content/Plugins/css/font-awesome.css"
                        ));
            // Style sheet section ====================================
            // s data table css
            bundles.Add(new StyleBundle("~/content/datatable").Include(
                        "~/Content/Plugins/DataTables/Responsive-2.2.5/css/responsive.bootstrap4.css",
                        "~/Content/Plugins/DataTables/DataTables-1.10.21/css/dataTables.bootstrap4.css",
                        "~/Content/Plugins/DataTables/FixedColumns-3.3.1/css/fixedColumns.bootstrap4.css",
                        "~/Content/Plugins/DataTables/FixedHeader-3.1.7/css/fixedHeader.bootstrap4.css",
                        "~/Content/Plugins/DataTables/FixedColumns-3.3.1/css/fixedColumns.bootstrap4.css",
                         "~/Content/Plugins/DataTablesCustom/TableCustom.css"
                        ));
            // e data table css
            // s theme css
            bundles.Add(new StyleBundle("~/content/themeStyle").Include(
                        "~/Content/Plugins/Bootstrap/css/bootstrap.css",
                        "~/Content/Plugins/FontAwesome/css/font-awesome.css",
                        "~/Content/Plugins/JqueryConfirm/jquery-confirm.css",
                        "~/Content/Plugins/SnackBar/SnackBar.css",
                        "~/Content/Plugins/remixicon/remixicon.css",
                        "~/Contect/Plugins/JqueryConfirm/jquery-confirm.css",
                        "~/Content/Plugins/JqueryConfirm/jquery-confirm-custom.css"
                ));
            // e theme css
        }
    }
}
