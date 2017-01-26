# -*- coding: utf-8 -*-
from odoo import http
import xmlrpclib
import datetime
from odoo.addons.web.controllers.main import Home


class UploadCntrl(Home):
    @http.route('/', auth='public', website="True")
    def index(self, **kw):
        return http.request.render('upload_attachment.form_upload')

    @http.route('/upload/', auth='public', website="True", method="post")
    def action(self, fichier,email):
        obj = http.request.env['res.upload']
        upload_id = obj.sudo().create({
                    'name': datetime.datetime.now().time(),
                    'email':email,
                    'fichier' : fichier

                })
        return http.request.render('upload_attachment.form_upload',{"id":upload_id.id})

    