import pandas as pd
import sqlalchemy

ingredientDf = pd.read_csv('./assets/Ingredients.csv')
recipeDf = pd.read_csv('./assets/Recipes.csv')






# Create DB and tables
"""
engine = create_engine('sqlite:///your_database_name.db')
metadata = db.MetaData()

recipe = db.Table('recipe', metadata,
              db.Column('id', db.Integer()),
              db.Column('name', db.String(100), nullable=False),
              db.Column('ingredient_1', db.String(255)),
              db.Column('ingredient_2', db.String(255)),
              db.Column('ingredient_3', db.String(255)),
              db.Column('ingredient_4', db.String(255)),
              db.Column('ingredient_5', db.String(255)),
              db.Column('exclude', db.String(255)),
              )

ingredient = db.Table('ingredient', metadata,
              db.Column('id', db.Integer()),
              db.Column('name', db.String(100), nullable=False),
              db.Column('category_list', db.String(255)),
              db.Column('effect', db.String(50), default='')
              )

category = db.Table('category', metadata,
              db.Column('id', db.Integer()),
              db.Column('name', db.String(25), nullable=False),
              )
"""