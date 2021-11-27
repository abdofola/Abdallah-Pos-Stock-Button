# -*- coding: utf-8 -*-
{
    'name': "POS Custom",
    'summary': "Point of sale custom module",
    'description': """This module adds custom button to the point of sale
        UI to display the available quantity of a product in the stock.""",
    'author': "Abdallah Alkaser",
    'website': "http://abdallah-alkaser.netlify.app",
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
