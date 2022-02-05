class ProductsAddComposition < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :composition, :string
  end
end
