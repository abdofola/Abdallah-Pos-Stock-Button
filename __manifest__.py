# -*- coding: utf-8 -*-
{
    'name': "POS Custom",
    'summary': "Point of sale custom module",
    'description': """Long description""",
    'author': "Abdallah Alkaser",
    'website': "http://www.example.com",
    'category': 'Point of Sale',
    'version': '14.0.1',
    'depends': ['point_of_sale'],
    'data': [
        'views/pos_assets.xml'
    ],
    'qweb': [
        'static/src/xml/pos_custom.xml'
    ],
}