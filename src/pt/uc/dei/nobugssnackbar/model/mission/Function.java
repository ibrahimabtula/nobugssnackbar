package pt.uc.dei.nobugssnackbar.model.mission;

public class Function {
	private int id;
	private String name;
	private String returnType;
	private String description;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getReturnType() {
		return returnType;
	}
	public void setReturnType(String returnType) {
		this.returnType = returnType;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
		
	public Function() {
		super();
	}
	
	public Function(int id, String name, String returnType, String description) {
		super();
		this.id = id;
		this.name = name;
		this.returnType = returnType;
		this.description = description;
	}
}
