#!/usr/bin/env ruby
require 'json'
require 'set'

$by_drink = Hash.new do |h1, k1|
    h1[k1] = Hash.new { |h2, k2| h2[k2] = Set.new }
end
$by_ingredient = Hash.new { |h, k| h[k] = {} }

def add_to_maps(drink, ingredient1, ingredient2)
    if ingredient1 == 'Condiment'
        add_to_maps(drink, 'Ketchup', ingredient2)
        add_to_maps(drink, 'Mustard', ingredient2)
    elsif ingredient2 == 'Condiment'
        add_to_maps(drink, ingredient1, 'Ketchup')
        add_to_maps(drink, ingredient1, 'Mustard')
    else
        $by_drink[drink][ingredient1].add(ingredient2)
        $by_drink[drink][ingredient2].add(ingredient1) unless ingredient1 == ingredient2
        $by_ingredient[ingredient1][ingredient2] = drink
        $by_ingredient[ingredient2][ingredient1] = drink
    end
end

File.readlines('raw_recipes.txt').each do |line| # Obtained from `Data/datafile.big` of the game files
    add_to_maps(*line.gsub(/(?<=[A-Za-z])(?<!Orange)Juice/, '').chomp.split("\t"))
end

def sort_map(map)
    map = map.sort_by { |k, _| k }.to_h
    map.each { |k1, v1| map[k1] = v1.sort_by { |k2, _| k2 }.to_h }
    map
end

sort_map($by_drink)
for drink, drinkIngredientMap in $by_drink
    for ingredient1, set in drinkIngredientMap
        $by_drink[drink][ingredient1] = $by_drink[drink][ingredient1].to_a.sort
    end
end

sort_map($by_ingredient)
puts JSON.pretty_generate({drinkMap: sort_map($by_drink), ingredientMap: sort_map($by_ingredient)}, indent: ' ' * 4)
