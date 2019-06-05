class TodosController < ApplicationController
  def index
    @todo = Todo.new
    @todos = Todo.all
  end

  def create
    @todo = Todo.new
    @todo.content = params[:todo][:content]
    if @todo.save
     
        puts ".................this request is from fetch"
        respond_to do |format|

          format.html do
            puts ".............response format as html"
            render partial: 'todo', locals:{todo: @todo}
          end
          format.json do 
            puts ".............response format as json"
            render json:@todo
          end

        end
      
    end
  end

  def new
    @todo = Todo.new
  end
end
