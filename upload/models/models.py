# -*- coding: utf-8 -*-

from odoo import models, fields, api


class ResUpload(models.Model):
	_name = 'res.upload'

	name = fields.Char()  
	email = fields.Char()
	fichier = fields.Binary('file')
