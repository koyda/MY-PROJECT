﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KD.Controllers
{
    public class KDController : Controller
    {
        // GET: KD
        public ActionResult Index()
        {
            return View("~/Views/KD/Index.cshtml");
        }
    }
}