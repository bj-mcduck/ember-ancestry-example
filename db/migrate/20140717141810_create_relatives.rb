class CreateRelatives < ActiveRecord::Migration
  def change
    create_table :relatives do |t|
      t.string :name
      t.string :ancestry
      t.string :slug
      t.string :full_path

      t.timestamps
    end
    add_index :relatives, :full_path, unique: true
  end
end
