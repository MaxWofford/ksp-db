class CreateCrafts < ActiveRecord::Migration
  def change
    create_table :crafts do |t|
      t.text :name
      t.text :description
      t.text :craft_file

      t.timestamps
    end
  end
end
