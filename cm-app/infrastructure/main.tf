# TODO: paste your Terraform (or CloudFormation) to stand up VPC, EC2, EKS, S3
resource "aws_security_group" "demo_sg" {
  name        = "demo-open-ssh"
  description = "Demo SG for testing AWS006"
  vpc_id      = var.vpc_id   

\
}
